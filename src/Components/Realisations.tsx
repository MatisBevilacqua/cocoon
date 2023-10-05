import { useEffect, useState } from 'react';
import PocketBase from "pocketbase";
const pb = new PocketBase('http://cocoon-mdesign.fr/db/');
import CardRealisations from "./CardRealisations";
import ShowRealisation from './ShowRealisations';


interface RealisationsProps {
    setActiveComponent?: (component: string) => void,
    banniere: string,
    lieux: string,
    moodboard: string,
    titre: string,
    texte: string,
    texte_fin: string,
    avant: string[]; 
    apres: string[]; 
    realisations: string[]; 
}

export default function Realisations() {

    const [stockRea, setStockRea] = useState<RealisationsProps[]>([]);
    const [stockSelect, setStockSelect ] = useState<RealisationsProps[]>([]);
    const [ifSelect, setIfSelect] = useState(false);

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
        console.log(stockRea);
        
        fetchData().catch(console.error);
    }, []);

    if(ifSelect){
        return <ShowRealisation banniere={stockSelect[0].banniere} lieux={stockSelect[0].lieux} texte_fin={stockSelect[0].texte_fin} moodboard={stockSelect[0].moodboard} titre={stockSelect[0].titre} texte={stockSelect[0].texte}  avant={stockSelect[0].avant} apres={stockSelect[0].apres} realisations={stockSelect[0].realisations}  />
    }

    return (
        <>
            <section className="section__realisation">
                <div className="realisation__container">
                    {stockRea.map(o => (
                        <article onClick={() => {
                            stockSelect.push(o);
                            setIfSelect(true);

                        }} className="realisation__card">
                            <CardRealisations img={o.banniere} title={o.titre} />
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}
