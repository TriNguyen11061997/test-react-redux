import Image from "../components/Images";
import { connect } from "react-redux";
import { isLoading,getImageRequest} from "../actions/index";


const mapStateToProps = (state, ownProps) => ({
    image: state.image.image
});

// const mapDispatchToProps = dispatch => ({
//     handleDelete: i => dispatch(del(i)),
//     onChange: (value, i) => dispatch(changeCount(i, value))
// });

const mapDispatchToProps = {
    loading :isLoading,
    getImage: getImageRequest,
    handleClick : getImageRequest, 
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Image);
