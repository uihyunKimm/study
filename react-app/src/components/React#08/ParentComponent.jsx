import ChildComponent from "./ChildComponent";
import { MyContext } from "./Context";

const ParentComponent = () => {
    return (
        <MyContext.Provider value="안녕하세요">
            <ChildComponent />
        </MyContext.Provider>
    );
};

export default ParentComponent;