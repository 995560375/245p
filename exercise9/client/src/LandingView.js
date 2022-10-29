const { default: Main } = require("./Main");
const { MAIN_DATA } = require("./data");

//Data

function LandingView() {
    return(
        <>
            <Main content={MAIN_DATA[0].content} />
        </>
    )
}

export default LandingView;