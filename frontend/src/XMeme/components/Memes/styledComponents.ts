import tw, { styled } from "twin.macro";

export const MemesContainer = styled.div`
   ${tw`
        w-full md:w-3/5 py-8 md:pl-2px md:pr-16px flex flex-wrap md:overflow-y-auto
    `}
`;

export const NoMemesMessage = styled.span`
   ${tw`
        mx-auto self-center
    `}
`;
