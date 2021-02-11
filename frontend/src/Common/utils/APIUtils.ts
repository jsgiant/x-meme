import {
   apiErrorProblems,
   apiMethods,
   apiStatus,
   resStatuses,
   statusCodes,
} from "../constants/APIConstants";

const makeAPICall = (api, endpoint: string, requestData, type: string) => {
   let response;
   try {
      switch (type) {
         case apiMethods.post:
            response = api.post(endpoint, { ...requestData });
            if (response.ok === false) {
               throw Error(JSON.stringify(response));
            }
            return response;
         case apiMethods.get:
            response = api.get(endpoint);
            if (response.ok === false) {
               throw Error(JSON.stringify(response));
            }
            return response;
         case apiMethods.patch:
            response = api.patch(endpoint, { ...requestData });
            if (response.ok === false) {
               throw Error(JSON.stringify(response));
            }
            return response;
         case apiMethods.delete:
            response = api.delete(endpoint);
            if (response.ok === false) {
               throw Error(JSON.stringify(response));
            }
            return response;
         default:
      }
   } catch (error) {
      return error;
   }
};

export const networkCallWithAxios = async (
   api,
   endpoint: string,
   requestData,
   type = apiMethods.post
) => {
   let response;
   try {
      response = await makeAPICall(api, endpoint, requestData, type);
   } catch (error) {
      throw error;
   }
   return response.data;
};

export const isFetching = (status: number) => apiStatus.loading === status;

export const isFailed = (status: number) => apiStatus.failed === status;

export const isSuccess = (status: number) => apiStatus.success === status;

export const getParsedErrorMessage = (error) => {
   const formattedError = getFormattedError(error);
   return formattedError.description;
};

export function isNetworkError(apiError) {
   const { networkError, timeoutError } = apiErrorProblems;
   return apiError.problem === networkError || apiError.problem === timeoutError
      ? true
      : false;
}

export const getFormattedError = (apiError) => {
   const errorTitle = "Oops! Something Went Wrong";
   const errorDescription =
      "We're having some trouble completing your request. Please try again.";
   const connectionLostErrorTitle = "Connection lost";
   const connectionLostErrorDescription =
      "Please check your internet connection";

   let description = errorDescription;
   let title = errorTitle;
   let errorCode = statusCodes.internalServerErrorCode;
   if (apiError !== null && apiError !== undefined) {
      try {
         const parsedMessage = JSON.parse(apiError);
         let parsedError;

         if (parsedMessage.data === undefined || parsedMessage.data === null) {
            // To handle case when we are directly returning backend error message
            parsedError = parsedMessage;
         } else {
            // To handle case when we are adding all the requests to backend error message
            parsedError = parsedMessage.data;
         }

         if (parsedError !== undefined && parsedError !== null) {
            if (
               parsedError.message &&
               parsedError.message === resStatuses.requestTimedOut
            ) {
               title = errorTitle;
               description = errorDescription;
            }

            if (parsedError.response) {
               try {
                  const response = JSON.parse(parsedError.response);
                  const {
                     title: errorTitle,
                     description: errorDescription,
                  } = response;
                  if (errorTitle) {
                     title = errorTitle;
                  }
                  if (errorDescription) {
                     description = errorDescription;
                  } else {
                     description = parsedError.response;
                  }
               } catch (e) {
                  description = parsedError.response;
               }
            }
            if (parsedError.http_status_code) {
               errorCode = parsedError.http_status_code;
               if (
                  parsedError.http_status_code ===
                  statusCodes.noInternetErrorCode
               ) {
                  title = connectionLostErrorTitle;
                  description = connectionLostErrorDescription;
               }
            }
         }
         if (isNetworkError(parsedError)) {
            title = connectionLostErrorTitle;
            description = connectionLostErrorDescription;
         }
      } catch (e) {}
   }

   const apiErrorResponse = {
      errorCode,
      title,
      description,
   };
   return apiErrorResponse;
};
