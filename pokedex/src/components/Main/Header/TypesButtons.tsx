import "./typesButtons.scss"
import Offcanvas from 'react-bootstrap/Offcanvas';
import TypeDiv from "../../TypeDiv"
import types from "../../../common/data/types.json"
import { useAppDispatch, useAppSelector } from "../../../common/redux/hooks"
import { selectType, addOrRemoveType, resetType } from "../../../common/redux/appSlice"

interface TypesButtonConfig {
    show: boolean,
    onHide: () => void
}

const TypesButtons = ({ show, onHide }: TypesButtonConfig) => {
    const dispatch = useAppDispatch();
    const typeValue = useAppSelector(selectType);

    const buttonHandler = (type: string) => {
        dispatch(addOrRemoveType(type))
    }

    const resetTypes = () => {
        dispatch(resetType())
    }

    return (
        <Offcanvas show={show} onHide={onHide} placement={"bottom"} className="offcanvas-types" scroll={true}>
            <TypeDiv
                pokemonType="All types"
                className={typeValue.length == 0 ? "checked" : ""}
                onClick={() => resetTypes()} />
            {types.map((type, id) => {
                return (
                    <TypeDiv key={id}
                        pokemonType={type.english}
                        className={typeValue.includes(type.english) ? "checked" : ""}
                        onClick={() => buttonHandler(type.english)} />
                )
            })}
        </Offcanvas>
    )
}

export default TypesButtons