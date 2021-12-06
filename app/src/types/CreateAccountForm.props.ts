import { FC, ReactNode } from "react";

interface ICreateAccounFormProps {
  modal: FC<{children: ReactNode}>;
  closeModal: ()=> void;
}

export default ICreateAccounFormProps;