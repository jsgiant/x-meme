export const apiMethods = {
   post: "POST",
   get: "GET",
   patch: "PATCH",
   delete: "DELETE",
};

export const apiStatus = {
   loading: 100,
   success: 200,
   failed: 400,
};

const REQUEST_TIMED_OUT = "Endpoint request timed out";
const INTERNAL_SERVER_ERROR_CODE = 500;
const NO_INTERNET_ERROR_CODE = 503;
const BAD_REQUEST_ERROR_CODE = 400;
const UNAUTHORIZED_ERROR_CODE = 401;
const ACCESS_FORBIDDEN_ERROR_CODE = 403;
const NOT_FOUND_ERROR_CODE = 404;

export const resStatuses = {
   requestTimedOut: REQUEST_TIMED_OUT,
};

export const statusCodes = {
   internalServerErrorCode: INTERNAL_SERVER_ERROR_CODE,
   noInternetErrorCode: NO_INTERNET_ERROR_CODE,
   badRequestErrorCode: BAD_REQUEST_ERROR_CODE,
   unAuthorizedErrorCode: UNAUTHORIZED_ERROR_CODE,
   accessForbiddenErrorCode: ACCESS_FORBIDDEN_ERROR_CODE,
   notFoundErrorCode: NOT_FOUND_ERROR_CODE,
};

export const apiErrorProblems = {
   networkError: "NETWORK_ERROR",
   timeoutError: "TIMEOUT_ERROR",
};
