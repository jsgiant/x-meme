import tw, { styled } from "twin.macro";

export const MemesContainer = styled.div`
	${tw`
        w-11/12 md:w-1/2 py-8 md:pl-2px md:pr-16px flex flex-wrap md:overflow-y-auto
    `}
`;

export const MemesHeading = styled.h1`
	${tw`w-full text-center`}
`;

export const NoMemesMessage = styled.span`
	${tw`
        mx-auto self-center
    `}
`;
