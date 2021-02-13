import tw, { styled } from "twin.macro";

export const AddMemeFormContainer = styled.div`
	${tw`w-full flex flex-col justify-center items-center  pb-8`};
	font-family: sans-serif;
	background-color: #f1f7ff;
`;

export const AddMemeForm = styled.form`
	${tw`flex flex-col items-center w-11/12 md:w-3/4 lg:w-1/2 bg-white py-8`};
	border-radius: 8px;
`;

export const Logo = styled.img`
	width: 90px;
	height: 90px;
	object-fit: contain;
`;

export const Heading = styled.p`
	font-size: 32px;
	color: #171f46;
`;

export const Label = styled.label`
	color: #7b8794;
	font-size: 16px;
	font-weight: bold;
	margin-top: 16px;
	margin-bottom: 6px;
	width: 77%;
`;

export const UserInput = styled.input`
	height: 40px;
	border-style: solid;
	border-width: 1px;
	border-color: #cbd2d9;
	border-radius: 4px;
	padding-left: 12px;
	width: 75%;
`;

export const SubmitButton = styled.button`
	${tw`text-white font-bold focus:outline-none border-none px-5 py-3 mt-4`}
	border-radius: 4px;

	background-color: #0b69ff;
`;

export const SubmitButtonWhileLoading = styled.button`
	${tw`text-white flex justify-center items-center cursor-wait opacity-50 focus:outline-none mt-4`}
	border-radius: 4px;
	background-color: #0b69ff;
`;
export const ValidationError = styled.span`
	${tw`text-sm`}
	color: #ff0b37;
	margin-top: 16px;
	margin-bottom: 6px;
	width: 77%;
`;
