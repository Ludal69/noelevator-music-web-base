import React from "react";

const Bio: React.FC = () => {
  return (
    <div className="min-h-screen bg-custom-background bg-cover bg-center text-custom-yellow p-8">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">
          No Elevator: Une Évasion Mélodique
        </h1>
        <div className="space-y-6 text-lg">
          <p>
            Durant son enfance, Pierre utilisait l'art comme un échappatoire, un
            besoin vital pour s'exprimer, d'abord par le dessin, puis par la
            musique. L’écriture et la musique deviennent pour lui des moyens
            cathartiques et thérapeutiques, donnant naissance à ses premières
            compositions comme <em>Lonely Boy</em> et <em>Placeholder</em>.
          </p>
          <p>
            En 2019, après avoir déménagé à Paris et trouvé une stabilité en
            tant que Game Designer dans une entreprise de jeux vidéo, Pierre
            ressent un besoin irrésistible de stimulation artistique. Il décide
            alors de monter un groupe de musique. Rapidement, il est rejoint par
            Renaud, Pierre et Ludo.
          </p>
          <p>
            <strong>No Elevator</strong> se forme ainsi, un groupe de rock
            mélodique, énergique et puissant. Du hard rock au grunge en passant
            par des compositions pop, le groupe développe une versatilité sonore
            autour d'un noyau indie rock, permettant de toucher un large public
            tout en gardant une cohérence musicale à travers leurs compositions.
          </p>
          <p>
            Après leur premier concert le 20 février 2020, la pandémie de
            Covid-19 force le groupe à annuler tous leurs prochains spectacles.
            Cependant, cette période de pause leur permet de continuer à
            composer, répéter et enregistrer ce qui deviendra leur premier album
            : <em>Ground Floor</em>. Inspiré par des groupes tels que Queens of
            the Stone Age, Foo Fighters, ou Arctic Monkeys, cet album est une
            lettre d’amour au rock des années 90 et 2000, où chaque titre
            contient un thème accrocheur.
          </p>
          <p>
            Les textes de ce premier projet abordent des thèmes variés :
            histoires d'amour naïves, recherche de sa place loin de chez soi,
            difficultés à mener un projet créatif à bien en étant freiné par des
            problèmes personnels ou mondiaux.
          </p>
          <p>
            Le but du groupe est avant tout de recréer une famille, appartenir à
            quelque chose de plus grand que soi-même, tisser des liens et se
            faire des amis proches partageant le même amour de la musique. No
            Elevator est aussi poussé par l'envie de "faire du beau", magnifier
            notre vécu et le monde qui nous entoure. Nous avons aussi pour
            mission de devenir LE groupe de rock parisien. Nous voulons faire
            vivre la scène rock, proposer une énergie brute et mélodique en
            live, et faire bouger le public.
          </p>
          <h2 className="text-3xl font-bold mt-8">Membres du Groupe :</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Chant / Guitare rythmique : Pierre Gohin</li>
            <li>Chant / Guitare lead : Ludovic Gorron</li>
            <li>Basse : Renaud Grand</li>
            <li>Batterie : Jean Kraemer</li>
            <li>Piano (studio uniquement) : Victoria Rojat</li>
          </ul>
          <h2 className="text-3xl font-bold mt-8">Collaborateurs :</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Enregistrement & Mixage : Alexandre Mazarguil</li>
            <li>Mastering : Justin Shturtz</li>
            <li>Artwork : Kornel Zezula</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bio;
