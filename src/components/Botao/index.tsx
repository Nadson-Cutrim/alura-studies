import React from 'react';
import style from './Botao.module.scss';

interface IProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined, onClick?: () => void;
}
class Botao extends React.Component<IProps> {
  render() {
    const { type = "button", children, onClick } = this.props;
    return (
      <button onClick={onClick} className={style.botao} type={type}>
        {children}
      </button>
    )
  }
}

export default Botao;