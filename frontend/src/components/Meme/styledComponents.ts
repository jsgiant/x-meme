import tw, { styled } from "twin.macro";

export const MemeContainer = styled.div`
	${tw`
        w-full flex flex-col mb-12px rounded-6px
    `}
	max-height: max-content;
	border: 1px solid #7b8794;
`;

export const MemeBar = styled.div`
	${tw`
        flex justify-between mx-12px
    `}
`;

export const MemeTitle = styled(MemeBar)`
	${tw`
        mt-12px
    `}
`;

export const MemeCreatorName = styled.span`
	${tw`
        font-bold
    `}
`;

export const MemeSubTitle = styled(MemeBar)`
	${tw`
        my-8px items-center
    `}
`;

export const MemeCaption = styled.span`
	${tw`
        
    `}
`;

export const MemeOptionsContainer = styled.div`
	${tw`
      flex justify-end
   `}
`;

export const UpdateButton = styled.button`
	${tw`text-white cursor-pointer bg-green-500 font-bold focus:outline-none border-none`}
	border-radius: 4px;
	width: 80px;
	height: 40px;
`;

export const DeleteButton = styled(UpdateButton)`
	${tw`
      ml-8px bg-red-500 
   `}
`;

export const MemeImageContainer = styled.div`
	${tw`
        border
   `};
`;

export const MemeImage = styled.img`
	${tw`
        w-full h-full mt-auto object-cover rounded-b-6px border
    `};
	border-color: black;
`;
