import tw, { styled } from "twin.macro";

export const HeaderContainer = styled.div`
	${tw`
    flex p-3 items-center h-16 text-lg lg:text-2xl
    `}
`;

export const TitleContainer = styled.div`
	${tw`
        ml-2
    `}
`;

export const Title = styled.a`
	${tw`no-underline text-black font-bold`}
`;
