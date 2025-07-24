import '../sectionStyle.css'
import '../section_3/section_3.css'
import italyImage from './../images/italy.png'

function Italy() {
    return (
        <section id="Italy">
            <div class="img-div">
                <img src={italyImage}></img>
                <div class="detail-div">
                    <u><h1 class="description">Description:</h1></u>
                    <p class="detail">
                        🇮🇹 Dolomites, South Tyrol, Italy
                        The Dolomites are a breathtaking mountain range in northern Italy, forming part of the Southern Limestone Alps. Their sharp, pale limestone peaks rise dramatically
                        above lush valleys and green meadows, creating one of the most stunning landscapes in Europe. This region is listed as a UNESCO World Heritage Site for both its
                        natural beauty and geological significance. During autumn, the area is painted in warm tones of gold, orange, and red, with forests of larch and fir trees 
                        transforming the slopes. Small wooden cabins and peaceful pastures lie scattered beneath the mountains, adding charm to the serene atmosphere.
                        The Dolomites are a paradise for outdoor enthusiasts, offering world-class hiking, skiing, rock climbing, and mountain biking. Iconic villages like Ortisei, San Cassiano, and Cortina d'Ampezzo are cultural gems with charming alpine architecture.
                        A unique phenomenon here is the “Enrosadira” or alpenglow, where the mountain peaks turn pink or red during sunrise and sunset.
                        Photographers, nature lovers, and adventurers from all over the world visit the Dolomites year-round to witness this dramatic blend of color, light, and rugged terrain.
                        The region is also rich in Ladin heritage, a blend of Italian and Austrian influences that gives the local culture, language, and cuisine a distinct identity.
                        Whether you're looking for peaceful relaxation or alpine adventure, the Dolomites offer a once-in-a-lifetime experience.
                    </p>
                </div>
            </div>

        </section>
    )
}
export default Italy;