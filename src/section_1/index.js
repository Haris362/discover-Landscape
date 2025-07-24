import '../sectionStyle.css';
import '../section_1/section_1.css'
import chinaImage from './../images/china.png'
function China() {
    return (
        <section id="China">
            <div class="img-div">
                <img src={chinaImage}></img>
                <div class="detail-div">
                    <u><h1 class="description">Description:</h1></u>
                    <p class="detail">
                        This image depicts a classic Chinese landscape inspired by traditional art. A red multi-tiered pagoda stands gracefully near a calm lake, symbolizing harmony and cultural heritage. Behind it, steep karst mountains rise dramatically, veiled in soft mist that gives depth and mystery to the scene. A stone bridge arches elegantly across the water, connecting natural beauty with architectural mastery. The lush greenery surrounding the structure reflects China’s rich biodiversity and connection to nature. The golden light in the sky suggests dawn or dusk, adding a serene, poetic atmosphere. Overall, it captures the timeless essence of rural and cultural China.
                        Gentle ripples on the lake reflect the towering peaks and golden sky.
                        Distant cranes fly overhead, symbolizing peace and longevity in Chinese culture.
                        Willow trees sway slightly in the breeze, adding motion to the calm scene.
                        The overall composition echoes balance, meditation, and harmony with nature.
                    </p>
                </div>
            </div>

        </section>
    )
}
export default China;