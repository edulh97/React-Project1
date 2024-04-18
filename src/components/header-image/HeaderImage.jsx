import './HeaderImage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HeaderImage() {
    return (
        <>
            <div class="container">
                <div class="izquierda">
                    <img class="HeaderImage" src="src/images/cortesito.jpg" />
                </div>
                <div class="derecha">
                    <p>Casoplon del coletas</p>
                    <p>Casoplon de Rajoy</p>
                    <p>Casoplon del perro Sancheeeeee</p>
                </div>
            </div>
        </>
    )
}

export default HeaderImage;