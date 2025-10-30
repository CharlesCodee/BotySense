import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Shampooings from "./pages/Shampooings";
import Creme from "./pages/Creme";
import Coloration from "./pages/Coloration";
import Rouge from "./pages/Rouge";
import ProductDetails from "./pages/ProductDetails";
import Accueil from "./pages/Accueil";
import Corbeille from "./pages/Corbeille";
import "./sass/_index.scss";

const products = [
  {
    id: 1,
    nom: "Crème hydratante",
    note: 4.5,
    categorie: "Crème de peau",
    description: "Hydrate la peau en profondeur, la laissant douce et souple.",
    descriptionLongue: `La Crème hydratante est bien plus qu'un simple soin pour la peau ; c'est une expérience revitalisante qui transcende les attentes. Plongez dans un océan de bienfaits hydratants avec cette formule exceptionnelle conçue pour offrir une hydratation en profondeur, révélant une peau d'apparence plus jeune, douce et infiniment souple.`,
    ingredients: `
      Cette crème regorge d'ingrédients de haute qualité, soigneusement sélectionnés pour leurs propriétés nourrissantes. Des extraits botaniques apaisants, des huiles naturelles riches en nutriments et des agents hydratants avancés se combinent pour créer une formule équilibrée qui revitalise instantanément la peau.`,
    prix: 12.99,
    image: "/Creme_de_peau/0c498423-cd31-414b-b5ac-65e198a24176.webp",
  },
  {
    id: 2,
    nom: "Rouge à lèvres rouge vif",
    note: 3.3,
    categorie: "Rouge à lèvre",
    description: "Donne à vos lèvres une couleur éclatante et durable.",
    descriptionLongue: `Le Rouge à lèvres rouge vif est bien plus qu'un simple produit de maquillage ; c'est une déclaration audacieuse de style. Offrant une couleur éclatante et durable, ce rouge à lèvres transforme instantanément votre apparence, ajoutant une touche de glamour et de confiance.`,
    ingredients: `Cette formule exceptionnelle est enrichie en ingrédients de haute qualité, assurant une application douce et crémeuse. Des pigments vibrants se combinent avec des agents hydratants pour offrir non seulement une couleur intense, mais aussi une sensation confortable qui dure toute la journée.`,
    prix: 6.99,
    image: "/Rouge_a_levres/688f3f10-59ee-4250-8151-8d19e3c61c41.webp",
  },
  {
    id: 3,
    nom: "Coloration intense - Noir ébène",
    note: 4.8,
    categorie: "Coloration",
    description:
      "Obtenez une couleur noire intense pour vos cheveux avec cette coloration.",
    descriptionLongue: `La Coloration intense - Noir ébène est la solution parfaite pour obtenir une couleur noire profonde et captivante pour vos cheveux. Cette formule innovante offre une teinte riche tout en préservant la santé de vos cheveux.`,
    ingredients: `Les ingrédients de première qualité de cette coloration garantissent une couverture uniforme tout en nourrissant les cheveux. Des extraits naturels préservent la brillance et la texture, donnant à vos cheveux un éclat noir ébène qui ne passe pas inaperçu.`,
    prix: 9.99,
    image: "/Coloration/35cf1ca2-0ab2-4f88-827d-e444a0750f88.webp",
  },
  {
    id: 4,
    nom: "Shampooing nourrissant à l'huile d'argan",
    note: 4.6,
    categorie: "Shampooing",
    description:
      "Nettoie en douceur tout en nourrissant les cheveux avec de l'huile d'argan.",
    descriptionLongue: `Le Shampooing nourrissant à l'huile d'argan offre une expérience de nettoyage doux tout en nourrissant intensément vos cheveux. Cette formule équilibrée nettoie en profondeur sans compromettre la vitalité naturelle de vos cheveux.`,
    ingredients: `Enrichi en huile d'argan, ce shampooing est une source de nutrition pour vos cheveux. La kératine et d'autres ingrédients nourrissants travaillent ensemble pour renforcer et revitaliser, laissant vos cheveux soyeux, brillants et pleins de vie.`,
    prix: 4.99,
    image: "/Shampoing/153a114c-f8c9-416e-84bc-10b0f7ccb78a.webp",
  },
  {
    id: 5,
    nom: "Lotion tonique rafraîchissante",
    note: 4.2,
    categorie: "Crème de peau",
    description:
      "Tonifie et rafraîchit la peau tout en laissant une sensation agréable.",
    descriptionLongue: `La Lotion tonique rafraîchissante offre une sensation de tonification et de fraîcheur à votre peau. Cette lotion légère complète votre routine de soins de la peau, laissant votre visage revitalisé et prêt à affronter la journée.`,
    ingredients: `Des extraits botaniques apaisants et des agents tonifiants de haute qualité sont soigneusement combinés pour créer cette lotion revigorante. L'application régulière aide à équilibrer le pH de la peau, minimisant les pores et laissant une sensation rafraîchissante durable.`,
    prix: 9.99,
    image: "/Creme_de_peau/58902492-3187-4db8-affa-4b6bd4221621.webp",
  },
  {
    id: 6,
    nom: "Rouge à lèvres rose poudré",
    note: 3.7,
    categorie: "Rouge à lèvre",
    description:
      "Ajoute une touche délicate de rose à vos lèvres avec une finition satinée.",
    descriptionLongue: `Le Rouge à lèvres rose poudré ajoute une touche délicate de rose à vos lèvres avec une finition satinée. Cette nuance subtile apporte une élégance naturelle à votre maquillage quotidien.`,
    ingredients: `Formulé avec des pigments de haute qualité et des agents hydratants, ce rouge à lèvres glisse en douceur, offrant une couleur riche et une sensation confortable. La texture crémeuse assure une application uniforme, laissant vos lèvres douces et irrésistibles.`,
    prix: 6.99,
    image: "/Rouge_a_levres/8e4ee5ca-feae-40cb-a76f-0540f8778bf6.webp",
  },
  {
    id: 7,
    nom: "Coloration vibrante - Rouge flamboyant",
    note: 4.9,
    categorie: "Coloration",
    description:
      "Transformez vos cheveux avec une couleur rouge flamboyante et vibrante.",
    descriptionLongue: `La Coloration vibrante - Rouge flamboyant transforme vos cheveux avec une couleur rouge intense et vibrante. Exprimez-vous avec cette teinte audacieuse qui laisse une impression durable.`,
    ingredients: `Des pigments vibrants et des ingrédients nourrissants de haute qualité se combinent pour créer cette coloration sensationnelle. La formule respecte la santé de vos cheveux tout en offrant une couleur éclatante qui résiste au temps.`,
    prix: 9.99,
    image: "/Coloration/92ec640f-b65f-4eca-87d8-d986661370e7.webp",
  },
  {
    id: 8,
    nom: "Shampooing fortifiant à la kératine",
    note: 4.4,
    categorie: "Shampooing",
    description:
      "Renforce les cheveux en profondeur grâce à la kératine, laissant des cheveux sains et brillants.",
    descriptionLongue: `Le Shampooing fortifiant à la kératine est conçu pour renforcer vos cheveux en profondeur, laissant une chevelure saine et brillante. La kératine, ingrédient clé, agit pour restaurer la force et la résilience naturelles de vos cheveux.`,
    ingredients: `La formule est infusée de kératine de qualité supérieure et d'agents revitalisants. Ce shampooing fortifiant nettoie en douceur tout en réparant les cheveux abîmés, laissant vos cheveux plus forts, plus lisses et visiblement revitalisés.`,
    prix: 4.99,
    image: "/Shampoing/7ced709b-9271-4071-8172-79d67df6ca9c.webp",
  },
  {
    id: 9,
    nom: "Soin hydratant intensif",
    note: 4.1,
    categorie: "Crème de peau",
    description:
      "Un traitement intensif pour hydrater et régénérer la peau en profondeur.",
    descriptionLongue: `Le Soin hydratant intensif offre une hydratation profonde et régénérante pour votre peau. Cette formule avancée pénètre en profondeur, revitalisant la peau et lui redonnant son éclat naturel.`,
    ingredients: `Infusé d'ingrédients puissants tels que l'acide hyaluronique et les antioxydants, ce soin hydratant nourrit la peau en profondeur. Les extraits botaniques apaisants ajoutent une touche de calme, laissant votre peau soyeuse et éclatante.`,
    prix: 14.99,
    image: "/Creme_de_peau/285e98a0-fed4-41a8-a07a-302eef102165.webp",
  },
  {
    id: 10,
    nom: "Rouge à lèvres mat - Nude élégant",
    note: 3.6,
    categorie: "Rouge à lèvre",
    description:
      "Offrez à vos lèvres une teinte nude élégante avec une finition mate longue tenue.",
    descriptionLongue: `Le Rouge à lèvres mat - Nude élégant offre une teinte nude sophistiquée avec une finition mate longue tenue. Redéfinissez vos lèvres avec cette nuance subtile qui complète parfaitement tout look.`,
    ingredients: `Formulé avec des pigments mats de haute qualité et des agents hydratants, ce rouge à lèvres glisse en douceur, offrant une couleur riche et une finition sans brillance.`,
    prix: 6.99,
    image: "/Rouge_a_levres/5b50398e-c872-4740-b3ee-8e80360d87bd.webp",
  },
  {
    id: 11,
    nom: "Coloration naturelle - Brun chocolat",
    note: 4.7,
    categorie: "Coloration",
    description:
      "Une coloration naturelle qui donne à vos cheveux une teinte brun chocolat séduisante.",
    descriptionLongue: `La Coloration naturelle - Brun chocolat offre une teinte brun chocolat naturelle et séduisante à vos cheveux. Cette formule douce procure une couleur uniforme tout en préservant la santé de vos cheveux.`,
    ingredients: `Des extraits naturels et des agents nourrissants sont soigneusement sélectionnés pour cette coloration. La formule prend soin de vos cheveux tout en leur donnant une couleur magnifique et naturelle.`,
    prix: 9.99,
    image: "/Coloration/17b8e973-7530-4bba-8cc7-c98f27c1b6f7.webp",
  },
  {
    id: 12,
    nom: "Shampooing volumisant à la camomille",
    note: 4.5,
    categorie: "Shampooing",
    description:
      "Apporte du volume aux cheveux fins tout en apaisant le cuir chevelu avec de la camomille.",
    descriptionLongue: `Le Shampooing volumisant à la camomille donne du volume aux cheveux fins tout en apaisant le cuir chevelu. Cette formule légère nettoie en douceur, laissant vos cheveux pleins de vitalité et votre cuir chevelu apaisé.`,
    ingredients: `Infusé d'extraits de camomille et d'agents volumisants, ce shampooing nourrit les cheveux tout en ajoutant de la densité. Idéal pour ceux qui recherchent une chevelure luxuriante et pleine de vie.`,
    prix: 4.99,
    image: "/Shampoing/53865e39-f423-4f57-a6d7-07456725f33f.webp",
  },
  {
    id: 13,
    nom: "Crème anti-rides",
    note: 3.8,
    categorie: "Crème de peau",
    description:
      "Réduit l'apparence des rides et améliore l'élasticité de la peau.",
    descriptionLongue: `La Crème anti-rides est une solution avancée pour réduire l'apparence des rides et améliorer l'élasticité de la peau. Cette formule puissante hydrate en profondeur, laissant la peau visiblement plus lisse et revitalisée.`,
    ingredients: `Infusée d'ingrédients anti-âge tels que le rétinol et les peptides, cette crème combat les signes du vieillissement. Les agents hydratants nourrissent la peau, améliorant la fermeté et la souplesse.`,
    prix: 12.99,
    image: "/Creme_de_peau/a9b46408-dae4-4014-aebe-6012395b891f.webp",
  },
  {
    id: 14,
    nom: "Rouge à lèvres corail éclatant",
    note: 2.4,
    categorie: "Rouge à lèvre",
    description:
      "Donne à vos lèvres une teinte corail éclatante pour un look audacieux.",
    descriptionLongue: `Le Rouge à lèvres corail éclatant offre une teinte corail vibrante pour des lèvres audacieuses et éclatantes. Cette nuance vive apporte une touche de fraîcheur à votre maquillage quotidien.`,
    ingredients: `Formulé avec des pigments haute définition, ce rouge à lèvres offre une couleur éclatante et une application lisse. Les agents hydratants assurent des lèvres douces et confortables toute la journée.`,
    prix: 6.99,
    image: "/Rouge_a_levres/0f31c2ee-689a-47b7-9906-f932523ff3ce.webp",
  },
  {
    id: 15,
    nom: "Coloration douce - Blond doré",
    note: 4.6,
    categorie: "Coloration",
    description:
      "Éclaircit en douceur vos cheveux avec une teinte blond doré lumineux.",
    descriptionLongue: `La Coloration douce - Blond doré éclaircit en douceur vos cheveux avec une teinte blond doré lumineux. Cette formule délicate offre une couleur éclatante tout en préservant la santé de vos cheveux.`,
    ingredients: `Des agents éclaircissants doux et des ingrédients nourrissants sont combinés pour créer cette coloration. Donnez à vos cheveux une teinte lumineuse et naturelle sans compromettre leur vitalité.`,
    prix: 9.99,
    image: "/Coloration/b111dfeb-b83b-4540-8534-7952ce9e96f6.webp",
  },
  {
    id: 16,
    nom: "Shampooing réparateur à l'huile d'olive",
    note: 4.3,
    categorie: "Shampooing",
    description:
      "Répare les cheveux abîmés en profondeur grâce à l'huile d'olive nourrissante.",
    descriptionLongue: `Le Shampooing réparateur à l'huile d'olive offre une réparation en profondeur pour les cheveux abîmés. Cette formule riche en nutriments restaure la santé capillaire, laissant vos cheveux soyeux et revitalisés.`,
    ingredients: `L'huile d'olive, riche en acides gras et en antioxydants, pénètre profondément pour nourrir les cheveux. Les agents réparateurs travaillent en synergie pour renforcer la structure capillaire et réduire les dommages.`,
    prix: 4.99,
    image: "/Shampoing/3dfdb08f-c513-4e12-933c-54e051979c40.webp",
  },
  {
    id: 17,
    nom: "Masque hydratant nuit",
    note: 3.9,
    categorie: "Crème de peau",
    description:
      "Un masque nourrissant à laisser agir toute la nuit pour une peau hydratée au réveil.",
    descriptionLongue: `Le Masque hydratant nuit est un traitement intensif qui hydrate en profondeur pendant que vous dormez. Cette formule luxueuse régénère la peau, laissant votre teint revitalisé et éclatant au réveil.`,
    ingredients: `Des ingrédients hydratants et apaisants tels que l'aloès et l'acide hyaluronique sont combinés pour créer ce masque. Appliquez-le avant de dormir pour une expérience de soin nocturne qui transforme votre peau.`,
    prix: 14.99,
    image: "/Creme_de_peau/d33fefba-5170-4a85-ae63-e3b4497ad440.webp",
  },
  {
    id: 18,
    nom: "Rouge à lèvres mauve mystique",
    note: 4.5,
    categorie: "Rouge à lèvre",
    description:
      "Ajoutez une touche de mystère avec ce rouge à lèvres mauve aux nuances envoûtantes.",
    descriptionLongue: `Le Rouge à lèvres mauve mystique ajoute une touche de mystère à votre maquillage avec ses nuances envoûtantes. Cette teinte mauve sophistiquée est parfaite pour exprimer votre côté mystique.`,
    ingredients: `Formulé avec des pigments riches et des agents hydratants, ce rouge à lèvres offre une couleur durable. La texture crémeuse glisse en douceur, laissant vos lèvres douces et séduisantes.`,
    prix: 6.99,
    image: "/Rouge_a_levres/78b057a6-8f7b-4664-bcce-e8afb174dc6e.webp",
  },
  {
    id: 19,
    nom: "Coloration auburn intense",
    note: 4.7,
    categorie: "Coloration",
    description:
      "Obtenez une coloration auburn intense pour une transformation capillaire audacieuse.",
    descriptionLongue: `La Coloration auburn intense est le choix idéal pour ceux qui recherchent une transformation capillaire audacieuse. Cette teinte riche et intense donne à vos cheveux une couleur auburn séduisante, rehaussant votre style avec une touche vibrante.`,
    ingredients: `La formule contient des pigments de haute qualité qui pénètrent profondément dans les cheveux tout en les nourrissant. Des extraits naturels préservent la santé de vos cheveux, assurant une couleur durable et éclatante.`,
    prix: 9.99,
    image: "/Coloration/f024fe5f-a497-4126-b561-5d52586434c9.webp",
  },
  {
    id: 20,
    nom: "Shampooing apaisant à la menthe",
    note: 4.4,
    categorie: "Shampooing",
    description:
      "Calme le cuir chevelu et rafraîchit les cheveux grâce à l'extrait de menthe apaisant.",
    descriptionLongue: `Le Shampooing apaisant à la menthe offre une expérience rafraîchissante pour votre cuir chevelu tout en apportant vitalité et éclat à vos cheveux. L'extrait de menthe apaisant procure une sensation de fraîcheur revitalisante, idéale pour une routine capillaire apaisante.`,
    ingredients: `Enrichi en extrait de menthe, ce shampooing apaisant nettoie en douceur tout en laissant une sensation apaisante. Les ingrédients nourrissants contribuent à maintenir l'équilibre naturel du cuir chevelu.`,
    prix: 4.99,
    image: "/Shampoing/d9957a91-f82c-42ec-8493-8f3c627b9494.webp",
  },
  {
    id: 21,
    nom: "Sérum anti-taches",
    note: 4.2,
    categorie: "Crème de peau",
    description:
      "Atténue les taches sombres et uniformise le teint pour une peau radieuse.",
    descriptionLongue: `Le Sérum anti-taches est une solution puissante pour réduire l'apparence des taches sombres et améliorer l'éclat naturel de votre peau. Sa formule avancée cible les imperfections, favorisant un teint uniforme et radieux.`,
    ingredients: `Infusé d'agents éclaircissants et de vitamines nourrissantes, ce sérum agit en profondeur pour atténuer les taches tout en améliorant la texture de la peau. Appliquez régulièrement pour une peau d'apparence plus jeune et éclatante.`,
    prix: 12.99,
    image: "/Creme_de_peau/50e617c2-23db-4604-8d83-601bd1928462.webp",
  },
  {
    id: 22,
    nom: "Rouge à lèvres nude subtil",
    note: 4.6,
    categorie: "Rouge à lèvre",
    description:
      "Un nude subtil qui ajoute une touche de couleur naturelle à vos lèvres.",
    descriptionLongue: `Le Rouge à lèvres nude subtil est le compagnon idéal pour un look naturel et sophistiqué. Sa teinte douce ajoute une touche de couleur naturelle à vos lèvres, rehaussant votre beauté avec élégance.`,
    ingredients: `Formulé avec des ingrédients de qualité supérieure, ce rouge à lèvres glisse en douceur pour une application uniforme. La texture crémeuse et légère assure un confort tout au long de la journée.`,
    prix: 6.99,
    image: "/Rouge_a_levres/b5baddfb-0738-40b3-95b7-4bad0ae6edb0.webp",
  },
  {
    id: 23,
    nom: "Coloration cuivrée flamboyante",
    note: 4.8,
    categorie: "Coloration",
    description:
      "Optez pour une coloration cuivrée flamboyante pour des cheveux vibrants et audacieux.",
    descriptionLongue: `La Coloration cuivrée flamboyante est le choix parfait pour ceux qui recherchent des cheveux vibrants et audacieux. Cette teinte cuivrée intense apporte une touche de chaleur et de dynamisme à votre style, créant un impact visuel saisissant.`,
    ingredients: `Les pigments cuivrés de haute qualité combinés à des ingrédients nourrissants assurent une couleur éclatante qui résiste au temps. Transformez votre chevelure avec cette coloration flamboyante et pleine de vie.`,
    prix: 9.99,
    image: "/Coloration/c8a699b1-2e5d-4f50-afbc-294acc988ea6.webp",
  },
  {
    id: 24,
    nom: "Shampooing éclatant à la grenade",
    note: 4.5,
    categorie: "Shampooing",
    description:
      "Apporte de l'éclat aux cheveux tout en les nourrissant avec l'extrait de grenade revitalisant.",
    descriptionLongue: `Le Shampooing éclatant à la grenade offre une expérience revitalisante pour vos cheveux tout en apportant une touche d'éclat naturel. L'extrait de grenade revitalisant nourrit les cheveux, laissant une chevelure brillante et pleine de vitalité.`,
    ingredients: `Enrichi en extrait de grenade, ce shampooing éclatant nettoie en douceur tout en préservant la santé de vos cheveux. Les ingrédients nourrissants apportent brillance et éclat.`,
    prix: 4.99,
    image: "/Shampoing/04ea1830-38dc-4e66-b8d4-fe31663315bf.webp",
  },
  {
    id: 25,
    nom: "Crème anti-acné",
    note: 3.4,
    categorie: "Crème de peau",
    description:
      "Combat les imperfections et l'acné pour une peau plus lisse et éclatante.",
    descriptionLongue: `La Crème anti-acné est une solution ciblée pour combattre les imperfections et l'acné, révélant une peau plus lisse et éclatante. Sa formule puissante agit pour éliminer les imperfections tout en apaisant la peau.`,
    ingredients: `Infusée d'agents anti-acné et d'ingrédients apaisants, cette crème cible les problèmes cutanés tout en préservant l'hydratation naturelle de la peau. Appliquez régulièrement pour une peau visiblement améliorée.`,
    prix: 12.99,
    image: "/Creme_de_peau/aeac20ab-1a22-421c-906f-0662a67a9c59.webp",
  },
  {
    id: 26,
    nom: "Rouge à lèvres Bordeaux chic",
    note: 2.7,
    categorie: "Rouge à lèvre",
    description:
      "Une teinte Bordeaux chic pour des lèvres élégantes et sophistiquées.",
    descriptionLongue: `Le Rouge à lèvres Bordeaux chic ajoute une touche d'élégance et de sophistication à vos lèvres. Sa teinte profonde de Bordeaux crée un look audacieux, idéal pour les occasions spéciales et les moments où vous souhaitez vous démarquer.`,
    ingredients: `Formulé avec des pigments riches et des agents hydratants, ce rouge à lèvres glisse en douceur, offrant une couleur intense et une sensation confortable. La tenue longue durée assure des lèvres irrésistibles toute la journée.`,
    prix: 6.99,
    image: "/Rouge_a_levres/03554561-0d71-43f3-8952-b13cc2845b5b.webp",
  },
  {
    id: 27,
    nom: "Coloration pastel - Rose tendre",
    note: 3.9,
    categorie: "Coloration",
    description:
      "Adoptez une coloration pastel rose tendre pour une apparence douce et moderne.",
    descriptionLongue: `La Coloration pastel - Rose tendre offre une transformation capillaire douce et moderne. Cette teinte délicate de rose tendre apporte une touche de féminité à votre style, créant une apparence douce et raffinée.`,
    ingredients: `Les pigments pastel de haute qualité préservent la santé de vos cheveux tout en offrant une couleur douce et lumineuse. Transformez votre look avec cette coloration qui capture la tendance pastel.`,
    prix: 9.99,
    image: "/Coloration/90a6a8c4-ad8a-449c-affc-3d542209734f.webp",
  },
  {
    id: 28,
    nom: "Shampooing fortifiant à la biotine",
    note: 4.3,
    categorie: "Shampooing",
    description:
      "Renforce les cheveux fragiles avec de la biotine, favorisant la croissance et la santé capillaire.",
    descriptionLongue: `Le Shampooing fortifiant à la biotine est spécialement conçu pour renforcer les cheveux fragiles, favorisant la croissance et la santé capillaire. La biotine, ingrédient clé, agit pour fortifier les cheveux de la racine aux pointes.`,
    ingredients: `Enrichi en biotine de qualité supérieure et en agents revitalisants, ce shampooing fortifiant nettoie en douceur tout en nourrissant les cheveux. Utilisez régulièrement pour des cheveux plus forts, plus épais et en meilleure santé.`,
    prix: 4.99,
    image: "/Shampoing/2e72c05d-e55a-4922-802f-ed2b000192bd.webp",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Accueil />,
      },
      {
        path: "/Shampooings",
        element: <Shampooings products={products} />,
      },
      {
        path: "/Products/:id",
        element: <ProductDetails products={products} />,
      },
      {
        path: "/Cremes",
        element: <Creme products={products} />,
      },
      {
        path: "/Colorations",
        element: <Coloration products={products} />,
      },
      {
        path: "/Rouges",
        element: <Rouge products={products} />,
      },
      {
        path: "/Panier",
        element: <Corbeille />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
