import tw, { styled } from "twin.macro";
import Button from "../../Common/components/Button";

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

export const MemeTitleBar = styled(MemeBar)`
	${tw`
        mt-12px
    `}
`;

export const MemeCreatorName = styled.span`
	${tw`
        font-bold
    `}
`;

export const MemePostedTime = styled.span``;

export const MemeSubTitleBar = styled(MemeBar)`
	${tw`
        my-8px
    `}
`;

export const MemeCaption = styled.span`
	${tw`
        
    `}
`;

export const MemeOptionsContainer = styled.div`
	${tw`
      flex
   `}
`;

export const EditButton = styled(Button)`
	${tw`
      bg-transparent p-4px
   `}
	&:hover {
		${tw`
         bg-transparent
      `}
	}
`;

export const DeleteButton = styled(EditButton)`
	${tw`
      ml-8px
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
