import tw, { styled } from "twin.macro";

export const HomeContainer = styled.div``;

export const FormAndMemesContainer = styled.div`
	${tw`
        flex flex-col items-center h-1/2
    `};
`;

export const MemesContainer = styled.div`
	${tw`
      w-full flex flex-col justify-center items-center h-1/2 mt-8
   `}
`;

export const GetMemesErrorMessage = styled.p`
	${tw`font-semibold`};
	font-size: 16px;
`;

export const TryAgainButton = styled.button`
	${tw`text-white cursor-pointer font-bold focus:outline-none border-none  mt-4`}
	border-radius: 4px;
	background-color: #0b69ff;
	width: 100px;
	height: 40px;
`;
