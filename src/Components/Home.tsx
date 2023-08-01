import { useState, useRef, useEffect } from 'react'
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');
import CardRealisations from "./CardRealisations";
import ShowRealisation from './ShowRealisations';

interface HomeProps {
    setActiveComponent: (component: string) => void,
}

interface Rea {
    banniere: string,
    lieux: string,
    moodboard: string,
    titre: string,
    texte:string,
    texte_fin: string,
    avant: string[]; 
    apres: string[]; 
    realisations: string[]; 
}

export default function Home({ setActiveComponent }: HomeProps) {

    //const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [object, setObject] = useState('');
    const [message, setMessage] = useState('');
    const [sendConfirm, setSendConfirm] = useState('');
    const formRef = useRef(null);
    const [stockRea, setStockRea ] = useState<Rea[]>([]);
    const [ifSelect, setIfSelect] = useState(false);
    const [stockSelect, setStockSelect ] = useState<Rea[]>([]);

    const data = {
        "nom": name,
        "prenom": surname,
        "email": email,
        "telephone": phone,
        "objet": object,
        "message": message
    };

    const sendMessage = async () => {
        await pb.collection('message').create(data);
        setSendConfirm('Votre message à bien été envoyer !');

        setTimeout(() => {
            //formRef.current.reset();
            setSendConfirm('');
        }, 3000)
    }

    useEffect(() => {
        const fetchData = async () => {
            const rea = await pb.collection('realisations').getFullList({
                sort: '-created',
            });

            for (const r of rea) {
                const modifiedRealisations: string[] = r.realisations.map((item: string) => pb.files.getUrl(r, item));
                const modifiedAvant: string[] = r.avant.map((item: string) => pb.files.getUrl(r, item));
                const modifiedApres: string[] = r.apres.map((item: string) => pb.files.getUrl(r, item));

                setStockRea(l => [
                    ...l,
                    {
                        banniere: pb.files.getUrl(r, r.banniere),
                        lieux: r.lieux,
                        moodboard: pb.files.getUrl(r, r.moodboard),
                        titre: r.titre,
                        texte: r.texte,
                        texte_fin: r.texte_fin,
                        avant: modifiedAvant,
                        apres: modifiedApres,
                        realisations: modifiedRealisations,
                    }
                ]);
            }
        };
        fetchData().catch(console.error);
    }, []);

    if(ifSelect){
        return <ShowRealisation banniere={stockSelect[0].banniere} lieux={stockSelect[0].lieux} texte_fin={stockSelect[0].texte_fin} moodboard={stockSelect[0].moodboard} titre={stockSelect[0].titre} texte={stockSelect[0].texte}  avant={stockSelect[0].avant} apres={stockSelect[0].apres} realisations={stockSelect[0].realisations}  />
    }

    return (
        <>
            <section className="section__litleWelcome">
                <div className="litleWelcome__container">
                    <span className="litleWelcome__sub"></span>

                    <h3 className="litleWelcome__title">Bienvenue</h3>

                    <div className="litleWelcome__bar"></div>

                    <p className="litleWelcome__txt">lefklroezfzepoezkzefklroezfzepoez</p>
                    <p className="litleWelcome__txt">roefzepoezkzefklroezfzepoezkzefklroezfzepoezkzefk</p>
                    <p className="litleWelcome__txt">roezfzepoezkzefklroezfzepoezkzefklroezfzepoezkzefk</p>
                    <p className="litleWelcome__txt">roezfzepoezkzefklroezfzepoezkzefklroezfzepoezkzefk</p>

                    <button className="litleWelcome__button" onClick={() => {  setActiveComponent('Propos') }}>A propos de moi</button>
                </div>

                <div className="litleWelcome__container">
                    <img className="container__img"
                         src="https://media.adeo.com/media/1492025/balcon-recevoir-oasis-industriel-pergola-bois-1.jpg?width=800&quality=75"></img>
                </div>
            </section>

            <section className="section__citation">
                <img className="citation__img"
                     src="http://kits.artstudioworks.net/moona/wp-content/uploads/sites/12/2021/07/quo.png"></img>
                <h3 className="citation__title">La vie commence vraiment après avoir mis de l'ordre dans votre
                    maison</h3>
            </section>

            <section className="section__realisation">
                <h4 className="realisation__title">Mes dernières réalisations</h4>
                <div className="litleWelcome__bar"></div>
                <div className="realisation__container">
                    {stockRea.map(o => (
                        <article onClick={() => {
                            stockSelect.push(o);                         
                            setIfSelect(true);
                        }} className="realisation__card">
                            <CardRealisations img={o.banniere} title={o.titre}/>
                        </article>
                    ))}
                </div>
                <button className="litleWelcome__button"  onClick={() => {  setActiveComponent('Realisations') }}>Decouvrir plus de réalisations</button>
            </section>

            <section id="contact" className="section__contact">
                <div id="brownContact" className="contact__container">
                    <img className="contact__img"
                         src="https://media.adeo.com/media/1401604/dd9ed4cb-2d50-4f2b-b49a-a5b449b07ea3-jpg.jpg"></img>
                </div>

                <div id="beigeContact" className="contact__container">
                    <h6 className="contact__title">Discutons de votre projet</h6>
                    <form className="form" ref={formRef}>

                        <input onChange={(e) => { setName(e.target.value)}} placeholder="Nom"></input>

                        <input onChange={(e) => { setSurname(e.target.value)}}  placeholder="Prénom"></input>


                        <input onChange={(e) => { setEmail(e.target.value)}}  placeholder="Email"></input>


                        <input onChange={(e) => { setPhone(e.target.value)}}  placeholder="Téléphone"></input>


                        <input onChange={(e) => { setObject(e.target.value)}}  placeholder="Objet"></input>

                        <textarea onChange={(e) => { setMessage(e.target.value)}}  placeholder="Votre message">
                        </textarea>

                        <button onClick={sendMessage} className="form__button">Envoyer</button>

                        <p className="form__confirm">{sendConfirm}</p>
                    </form>
                </div>
            </section>
        </>
    )
}

