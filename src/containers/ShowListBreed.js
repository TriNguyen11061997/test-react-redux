import ListBreed from "../components/ListBreed";
import { connect } from "react-redux";
import {getImageRequest,getImageBySubBreedRequest,changeSubBreedRequest,getListBreedRequest,changeBreedRequest,getImageByBreedRequest } from "../actions/index";


const mapStateToProps = (state, ownProps) => ({
    breeds: state.breed.listBreed,
    image: state.image.image,
    is_loading : state.image.loading,
    breed : state.breed.breed,
    sub_breeds : state.breed.listSubBreed,
    sub_breed : state.breed.sub_breed
});

const mapDispatchToProps = {
    getListBreed: getListBreedRequest,
    handleChange: changeBreedRequest,
    handleClick : getImageByBreedRequest,
    handleClickForAll : getImageRequest,
    handleClickSub : getImageBySubBreedRequest,
    handleChangeSub : changeSubBreedRequest,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListBreed);
