import tw, { styled } from "twin.macro";
import Button from "../../../Common/components/Button";

export const MemeContainer = styled.div`
   ${tw`
        w-full flex flex-col mb-12px rounded-6px
    `}
   box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.4);
   @media (min-width: 768px) {
      width: 49%;
   }
   &:nth-of-type(odd) {
      margin-right: 2%;
   }
   max-height: max-content;
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

export const MemeOwnerName = styled.span`
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
        font-semibold
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
        mt-auto
   `}
`;

export const MemeImage = styled.img`
   ${tw`
        w-full h-full mt-auto object-cover rounded-b-6px
    `}
`;
