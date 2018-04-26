import React from 'react'
import '../../App.css';
import {Form, Input, Button, FormGroup} from 'reactstrap'

class NoteEdit extends React.Component{
    constructor(props) {
        super(props);
    }

    handleInputText = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        return (
            <div className='col-9 right__side'>
                <div className='row'>
                    <div className="col-3">
                        <h4>Edit Note:</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <Form>
                            <FormGroup>

                                <Input type="text" name="title" id="noteTitle" placeholder="Lorem ipsum" onChange={this.handleInputText}/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="textarea" name="detail" id="noteDetail"
                                       placeholder='Lorem ipsum dolor sit amet, et qui nonumes salutatus urbanitas, ei nec assentior quaerendum, mea at exerci consetetur appellantur. Vis velit nostrum ut. Est ei esse aliquam scribentur, nam quas nonumes et. An sea tantas propriae, esse dicta doctus cu his.

                     At saepe scripta contentiones eos, quem aliquam fabellas ius ei. Eam te prima discere. Debet dolorum sadipscing ex eos. Te mediocrem adversarium mel, ex mel causae accusata. Qui cu everti ceteros, id summo patrioque quaerendum usu.

                     Eum nobis sadipscing te. Laudem dolorem nominavi duo ea, utroque salutatus contentiones sit eu. In nonumes accusam usu, at est quaeque albucius. Prima disputationi quo no. Eros inani mel ne. Impedit principes has an.

                     Mutat graeci an usu, has possim assentior ei. Vim et purto mollis, laudem noluisse persecuti sit te. Nobis commodo eam et, nostro electram signiferumque nam no, sit eu prima verterem phaedrum. Mnesarchum complectitur cu duo. Populo bonorum accommodare pri ei, id pri nibh veritus, libris denique voluptatibus ea quo.

                     Sumo prompta reprehendunt no eos, eu est mollis adipiscing contentiones. Mea at dicunt voluptaria, ei nam dicunt offendit perfecto. Ea elitr possim vix. Et affert inimicus eum. Sea ne ocurreret delicatissimi, option elaboraret reprehendunt duo in. Ea mel phaedrum evertitur, mei ad nemore reprehendunt, tation virtute ceteros his ex.'
                                       onChange={this.handleInputText}/>
                            </FormGroup>
                            <a href={'/'} >Save</a>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default NoteEdit;