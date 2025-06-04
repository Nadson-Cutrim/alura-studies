import React from 'react';
import style from './Botao.module.scss';

interface IProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
}
class Botao extends React.Component<IProps> {
  render() {
    const { type = "button", children } = this.props;
    return (
      <button className={style.botao} type={type}>
        {children}
      </button>
    )
  }
}

export default Botao;