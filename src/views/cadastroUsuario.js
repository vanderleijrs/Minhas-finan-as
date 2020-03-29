import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import {withRouter} from 'react-router-dom'

class CadastroUsuario extends React.Component{
    state ={
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao:''
    }
    cadastrar=()=>{console.log(this.state)}
    cancelar=()=>{
        this.props.history.push('/login')
    }
    render(){
        return(
            <div className='container'>
                <Card title="Cadastro de Usuário">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup label="Nome: *" htmlfor="inputNome">
                                    <input type="text" id="inputNome" className="form-control" name="nome"onChage={e =>this.setState({nome:e.target.value})}/>
                                </FormGroup>
                                <FormGroup label="Email: *" htmlfor="inputEmail">
                                    <input type="email" id="inputEmail" className="form-control" name="email"onChage={e =>this.setState({nome:e.target.value})}/>
                                </FormGroup>
                                <FormGroup label="Senha: *" htmlfor="inputSenha">
                                    <input type="password" id="inputSenha" className="form-control" name="senha"onChage={e =>this.setState({nome:e.target.value})}/>
                                </FormGroup>
                                <FormGroup label="Repita a Senha: *" htmlfor="inputRepitaSenha">
                                    <input type="password" id="inputRepitaSenha" className="form-control" name="senha"onChage={e =>this.setState({nome:e.target.value})}/>
                                </FormGroup>
                                <button onClick={this.cadastrar}type="button"className="btn btn-success">Salvar</button>
                                <button onClick={this.cancelar} type="button"className="btn btn-danger">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}
export default withRouter(CadastroUsuario)