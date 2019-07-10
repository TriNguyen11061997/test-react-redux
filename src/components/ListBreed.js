import React from "react";
import Image from "./Image";
class ListBreed extends React.Component {

    componentDidMount() {
        this.props.getListBreed();
    }

    render() {
        const { sub_breed, breed, sub_breeds, image, handleClick, handleClickForAll, handleChangeSub, breeds, handleChange, handleClickSub } = this.props,
            MakeItem = function (X) {
                return <option key={X}>{X}
                </option>;
            };
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <select className="form-control" onChange={event =>
                            handleChange(event.target.value)}>
                            <option>all</option>
                            {breeds.map(MakeItem)}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <select className="form-control" onChange={event => {
                            event.target.value === "all" ? handleChange(breed) : handleChangeSub(breed, event.target.value);
                        }
                        }>
                            <option>all</option>
                            {sub_breeds.map(MakeItem)}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-primary" onClick={() => {
                            if (breed === "all") {
                                handleClickForAll()
                            }
                            else
                                sub_breed === "all" ? handleClick(breed) : handleClickSub(breed, sub_breed);
                        }}>Ramdom</button>
                    </div>
                </div>
                <hr></hr>
                <Image src={image} />
            </div>



        )
    }
}
export default ListBreed;
