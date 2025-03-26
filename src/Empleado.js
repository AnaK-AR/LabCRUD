import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table,Button,Container,FormGroup,
Modal,ModalHeader,ModalBody,ModalFooter,
} from "reactstrap";

const data = [
    {
        id: 1,
        name: "Jorge Carranza",
        email: "jorge.carranza@tec.com",
        atc: "MTY",
        level: 6,
        role: "Software Engineer",
        project: "Amazon",
        status: "Staffed"
      },
      {
        id: 2,
        name: "Ramon Velez",
        email: "ramon.velez@banorte.com",
        atc: "CDMX",
        level: 9,
        role: "Financial Analyst",
        project: "Banorte",
        status: "June 9"
      },
      {
        id: 3,
        name: "Hugo Sanchez",
        email: "hugo.sanchez@realmadrid.com",
        atc: "MAD",
        level: 7,
        role: "Head Coach",
        project: "Real Madrid",
        status: "2026"
      },
      {
        id: 4,
        name: "Rafael Marquez",
        email: "rafael.marquez@barcelona.com",
        atc: "BCN",
        level: 5,
        role: "Defense Coordinator",
        project: "Barcelona",
        status: "Staffed"
      },
      {
        id: 5,
        name: "Sergio Perez",
        email: "sergio.perez@redbullracing.com",
        atc: "MX",
        level: 10,
        role: "Lead F1 Driver",
        project: "Red Bull",
        status: "July 12"
      },
      {
        id: 6,
        name: "Max Verstapen",
        email: "max.verstappen@redbullracing.com",
        atc: "NL",
        level: 11,
        role: "Principal F1 Driver",
        project: "Red Bull",
        status: "2026"
      },
      {
        id: 7,
        name: "Carlos Sainz",
        email: "carlos.sainz@williamsracing.com",
        atc: "SP",
        level: 8,
        role: "F1 Driver",
        project: "Williams",
        status: "Staffed"
      }
  ];

export class Empleado extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: "",
            name: "",
            email: "",
            atc: "",
            level: "",
            role: "",
            status: ""
        },
    };

    mostrarModalActualizar = (dato) => {
        this.setState({
            form: dato,
            modalActualizar: true,
        });
    };

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };

    mostrarModalInsertar = () => {
        this.setState({
            modalInsertar: true,
        });
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
            if (dato.id === registro.id) {
                arreglo[contador].name = dato.name;
                arreglo[contador].email = dato.email;
                arreglo[contador].atc = dato.atc;
                arreglo[contador].level = dato.level;
                arreglo[contador].role = dato.role;
                arreglo[contador].status = dato.status;
            }
            contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };
       
    eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
        if (opcion === true) {
            var contador = 0;
            var arreglo = this.state.data;
            arreglo.map((registro) => {
                if (dato.id === registro.id) {
                    arreglo.splice(contador, 1);
                }
                contador++;
            });
            this.setState({ data: arreglo, modalActualizar: false });
        }};
    
    insertar= ()=>{
        var valorNuevo= {...this.state.form};
        valorNuevo.id=this.state.data.length+1;
        var lista= this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
    }

    handleChange = (e) => {
        this.setState({
            form: {...this.state.form,
            [e.target.name]: e.target.value,
            },
        });
    };

    render () {
        return (
        <>
        <Container>
            <br />
                <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
            <br />
            <br />
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>ATC</th>
                            <th>Level</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((dato) => (
                            <tr key={dato.id}>
                                <td>{dato.id}</td>
                                <td>{dato.name}</td>
                                <td>{dato.email}</td>
                                <td>{dato.atc}</td>
                                <td>{dato.level}</td>
                                <td>{dato.role}</td>
                                <td>{dato.status}</td>
                                <td>
                                    <Button color="primary" onClick={() => this.mostrarModalActualizar(dato)} >Editar</Button>{" "}
                                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
            
            <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader>
                    <div><h3>Insert name</h3></div>
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <label>Id: </label>
                        <input className="form-control" readOnly type="text" value={this.state.data.length+1} />
                    </FormGroup>
                    <FormGroup>
                        <label>Name: </label>
                        <input className="form-control" name="name" type="text" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Email: </label>
                        <input className="form-control" name="email" type="text" onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>ATC: </label>
                        <input className="form-control" name="atc" type="text" onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Level: </label>
                        <input className="form-control" name="level" type="text" onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Role: </label>
                        <input className="form-control" name="role" type="text" onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Status: </label>
                        <input className="form-control" name="status" type="text" onChange={this.handleChange}
                        />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.insertar()} >Insertar </Button>
                    <Button className="btn btn-danger" onClick={() => this.cerrarModalInsertar()}
                    >Cancelar</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.modalActualizar}>
                <ModalHeader>
                    <div><h3>Editar Registro</h3></div>
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <label> Id:</label>
                        <input className="form-control" readOnly type="text" value={this.state.form.id} />
                    </FormGroup>
                    <FormGroup>
                        <label>Name:</label>
                        <input className="form-control" name="name" type="text"
                        onChange={this.handleChange} value={this.state.form.name} />
                    </FormGroup>
                    <FormGroup>
                        <label>Email:</label>
                        <input className="form-control" name="email" type="text"
                        onChange={this.handleChange} value={this.state.form.email} />
                    </FormGroup>
                    <FormGroup>
                        <label>ATC:</label>
                        <input className="form-control" name="atc" type="text"
                        onChange={this.handleChange} value={this.state.form.atc} />
                    </FormGroup>
                    <FormGroup>
                        <label>Level:</label>
                        <input className="form-control" name="level" type="text"
                        onChange={this.handleChange} value={this.state.form.level} />
                    </FormGroup>
                    <FormGroup>
                        <label>Role:</label>
                        <input className="form-control" name="role" type="text"
                        onChange={this.handleChange} value={this.state.form.role} />
                    </FormGroup>
                    <FormGroup>
                        <label>Status:</label>
                        <input className="form-control" name="status" type="text"
                        onChange={this.handleChange} value={this.state.form.status} />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.editar(this.state.form)} >
                    Editar</Button>
                    <Button color="danger" onClick={() => this.cerrarModalActualizar()} >
                    Cancelar</Button>
                </ModalFooter>
            </Modal>
        </>
    )
    } 
}