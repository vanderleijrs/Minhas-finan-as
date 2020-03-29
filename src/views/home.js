import React from 'react';

class Home extends React.Component {
    state = {
        saldo: 0
    }

    render() {

        return (
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é seu sistema de finanças.</p>
                <p className="lead">Seu saldo para o mês atual é de R$ {this.state.saldo}.</p>
                <p>Essa é sua área administrativa, utilize um das menus ou botões abaixo para navegar pelo</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#/cadastro-usuarios" role="button"> <i className="fa fa-users"></i>Cadastrar Usuário</a>
                    <a className="btn btn-danger btn-lg" href="https://bootwatch.com/flatly/#" role="button"> <i className="fa fa-users"></i>Cadastrar Lançamento</a>
                </p>
            </div>
        )
    }
}
export default Home 