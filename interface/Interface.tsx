export interface ButtonProps {
  shade: string;
  text: string;
}

export interface TableHeader {
  text: string;
}

export interface WalletOptions {
  shade: string;
  img: string;
  text: string;
}

export interface WalletAddress {
  address: string;
  balance: string;
  status: string;
}

export interface ModalInterface {
  hideModal: () => void;
}

export interface UserInterface {
  name: string;
  time: string;
}
