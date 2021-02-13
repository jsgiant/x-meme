import tw, { styled } from "twin.macro";

import Button from "../../Common/components/Button";

export const AppContainer = styled.div``;

export const FormAndMemesContainer = styled.div`
	${tw`
        flex flex-col items-center h-1/2
    `};
`;

export const MemesContainer = styled.div`
	${tw`
      w-full flex flex-col justify-center items-center h-1/2
   `}
`;

export const GetMemesErrorMessage = styled.p``;

export const GetMemesTryAgainButton = styled(Button)``;
