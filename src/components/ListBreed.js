import React from "react";
import Image from "./Image";
import SelectSearch from 'react-select-search'
import Loading from "./Loading";
class ListBreed extends React.Component {



    componentDidMount() {
        this.props.getListBreed();
    }

    renderFontValue(label, option) {
        return <span style={{ fontFamily: option['data-stack'] }}>{label}</span>;
    }

    renderFontOption(option) {
        let style = {
            fontFamily: option['data-stack']
        };

        return <span style={style}>{option.name}</span>;
    }

    loadImage = (src) => {
        if (this.props.is_loading) {
            return <Loading />
        }
        else {
            return <Image src={src} />
        }
    }

    render() {
        const {is_loading,sub_breed, breed, sub_breeds, image, handleClick, handleClickForAll, handleChangeSub, breeds, handleChange, handleClickSub } = this.props;
        // MakeItem = function (X) {
        //     return <option key={X}>{X}
        //     </option>;
        // };
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <SelectSearch
                            className="select-search-box"
                            value={breed}
                            onChange={
                                (obtion, state, props) => {
                                    handleChange(obtion.value);
                                }
                            }
                            renderOption={this.renderFontOption}
                            renderValue={this.renderFontValue}
                            options={breeds.map((item) => {
                                return {
                                    name: item,
                                    value: item
                                }
                            })}
                            placeholder="Breed" />
                    </div>
                    <div className="col-md-6">
                        <SelectSearch
                            className="select-search-box"
                            value={sub_breed}
                            onChange={
                                (obtion, state, props) => {
                                    obtion.value === "all" ? handleChange(breed) : handleChangeSub(breed, obtion.value);
                                }
                            }
                            renderOption={this.renderFontOption}
                            renderValue={this.renderFontValue}
                            options={sub_breeds.map((item) => {
                                return {
                                    name: item,
                                    value: item
                                }
                            })}
                            placeholder="Sub Breed" />
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
                <Loading />
                <Image src={image} hidden={is_loading}/>
            </div>
        )
    }
}
export default ListBreed;
