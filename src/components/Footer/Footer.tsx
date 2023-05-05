import "./footer.scss"
import { AiFillGithub } from "react-icons/ai"
import { githubLink } from "../../common/Constants"

const Footer = () => {
    return (
        <a href={githubLink} className="footer-container">
            <AiFillGithub size={30} />
        </a>
    )
}

export default Footer