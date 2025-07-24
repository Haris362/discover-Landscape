import '../sectionStyle.css'
import '../section_2/section_2.css'
import pakistanImage from './../images/pakistan.png'

function Pakistan() {
    return (
        <section id="Pakistan">
            <div class="img-div">
                <img src={pakistanImage}></img>
                <div class="detail-div">
                    <u><h1 class="description">Description:</h1></u>
                    <p class="detail">
                        This landscape beautifully captures the essence of northern Pakistan's natural and architectural heritage. A grand Mughal-style mosque, with its iconic domes and slender minarets, stands elegantly beside a calm river, reflecting both the building and 
                        the warm golden light of dusk. Behind the mosque, snow-covered peaks rise majestically — reminiscent of the Himalayas or the Karakoram range — symbolizing the country's rugged terrain and high-altitude beauty.
                        The surrounding trees and gentle slopes hint at a fertile valley, possibly inspired by Hunza or Swat. A stone bridge with elegant arches crosses the river, connecting both banks in harmony. The golden sky, with
                        soft orange and blue hues, suggests a peaceful transition from day to evening. The water mirrors the light and landscape, enhancing the tranquility of the scene. Cypress and poplar trees dot the area, adding vertical contrast to the horizontal flow of the river.
                        This setting represents the balance between Pakistan natural splendor and rich Islamic architectural tradition. The blend of culture, spirituality, and nature reflects the deep-rooted identity of the region. Overall, the scene radiates calm, history, and awe.
                    </p>
                </div>
            </div>

        </section>
    )
}
export default Pakistan;