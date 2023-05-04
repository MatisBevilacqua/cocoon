import {useEffect, useState} from 'react';
import PocketBase from "pocketbase";
const pb = new PocketBase('http://127.0.0.1:8090');
import CardRealisations from "./CardRealisations";


interface RealisationsProps {
    setActiveComponent?: (component: string) => void,
    banniere: string,
    lieux: string,
    moodboard: string,
    titre: string,
    texte:string,
    texte_fin: string,
    realisations: [],
    avant: string,
    apres: string
}

export default function Realisations() {

    const [stockRea, setStockRea ] = useState<RealisationsProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const rea = await pb.collection('realisations').getFullList({
                sort: '-created',
            });

            for(const r of rea){
                setStockRea(l => [...l, {
                    banniere: pb.files.getUrl( r,r.banniere ),
                    lieux: r.lieux,
                    moodboard: pb.files.getUrl( r,r.moodboard ),
                    titre: r.titre,
                    texte: r.texte,
                    texte_fin: r.texte_fin,
                    avant: r.avant,
                    apres: r.apres,
                    realisations: r.realisations
                }]);
            }
        };
        fetchData().catch(console.error);
    }, []);

    return (
        <>
            <section className="section__realisation">
                <div className="realisation__container">
                    {stockRea.map(o => (
                        <>
                            <CardRealisations img={o.banniere} title={o.titre}/>
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}
