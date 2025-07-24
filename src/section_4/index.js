import '../sectionStyle.css';
import '../section_4/section_4.css'
import indiaImage from '../images/india.png'
function India() {
    return (
        <section id="India">
            <div class="img-div">
                <img src={indiaImage}></img>
                <div class="detail-div">
                    <u><h1 class="description">Description:</h1></u>
                    <p class="detail">
                        This landscape captures the serene beauty of rural India with a traditional Hindu temple standing beside a calm river. The temple, made of red sandstone, showcases intricate carvings and spires, reflecting India's rich architectural heritage. In the background, a majestic mountain rises above rolling hills, adding depth and grandeur to the scene. A graceful stone bridge spans the river, connecting both banks and symbolizing unity. Lush green trees line the water, highlighting the region’s natural abundance. The golden sky suggests either sunrise or sunset, evoking a peaceful and spiritual ambiance. This image beautifully blends nature, culture, and history.
                        Gentle ripples on the water mirror the vibrant sky, adding a dreamlike stillness.
                        Villagers can be seen in the distance crossing the bridge, bringing life to the scene.
                        The temple’s elevated platform signifies its sacred presence amidst nature.
                        Altogether, the setting evokes a timeless connection between the divine and the land.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default India;