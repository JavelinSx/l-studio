import { FC } from "react";
interface AnimationProps{}
const Animation: FC<AnimationProps> = () => {
    return(
        <div className="animation-container">
            <div className="circle xxlarge shade1"></div>
            <div className="circle xlarge shade2"></div>
            <div className="circle large shade3"></div>
            <div className="circle medium shade4"></div>
            <div className="circle small shade5"></div>
        </div>

    )
}
export default Animation;