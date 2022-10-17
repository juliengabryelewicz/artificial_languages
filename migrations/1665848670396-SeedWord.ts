import { MigrationInterface, QueryRunner } from "typeorm"

export class SeedWord1665848670396 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO pos_entity (code) VALUES ('particule')`);
        await queryRunner.query(`INSERT INTO pos_entity (code) VALUES ('adjectif')`);
        await queryRunner.query(`INSERT INTO pos_entity (code) VALUES ('nom')`);
        await queryRunner.query(`INSERT INTO pos_entity (code) VALUES ('nombre')`);
        await queryRunner.query(`INSERT INTO pos_entity (code) VALUES ('verbe')`);
        await queryRunner.query(`INSERT INTO pos_entity (code) VALUES ('auxiliaire')`);
        await queryRunner.query(`INSERT INTO pos_entity (code) VALUES ('preposition')`);

        await queryRunner.query(`INSERT INTO translation_entity (code) VALUES ('fr')`);

        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('a', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('akesi', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('ala', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('alasa', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('ale', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('ali', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('anpa', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('ante', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('anu', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('awen', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('e', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('en', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('esun', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('ijo', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('ike', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('ilo', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('insa', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('jaki', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('jan', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('jelo', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('jo', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('kala', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('kalama', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('kama', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('kasi', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('ken', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('kepeken', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('kili', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('kiwen', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('ko', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('kon', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('kule', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('kulupu', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('kute', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('la', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('lape', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('laso', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('lawa', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('len', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('lete', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('li', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('lili', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('linja', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('lipu', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('loje', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('lon', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('luka', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('lukin', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('lupa', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('ma', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('mama', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('mani', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('meli', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('mi', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('mija', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('moku', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('moli', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('monsi', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('mu', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('mun', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('musi', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('mute', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('nanpa', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('nasa', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('nasin', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('nena', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('ni', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('nimi', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('noka', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('o', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('olin', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('ona', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('open', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('pakala', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('pali', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('palisa', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('pan', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('pana', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('pi', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('pilin', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('pimeja', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('pini', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('pipi', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('poka', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('poki', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('pona', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('pu', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('sama', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('seli', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('selo', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('seme', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('sewi', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('sijelo', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('sike', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('sin', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('sina', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('sinpin', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('sitelen', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('sona', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('soweli', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('suli', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('suno', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('supa', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('suwi', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('tan', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('taso', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('tawa', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('telo', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('tenpo', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('toki', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('tomo', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('tu', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('unpa', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('uta', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('utala', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('walo', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('wan', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('waso', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('wawa', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('weka', 1)`);
        await queryRunner.query(`INSERT INTO word_entity (name, "languageId") VALUES ('wile', 1)`);


        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('(accent, émotion ou confirmation)', 1, 1, 1)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('animal non mignon ; reptile, amphibien', 2, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('non, ne, pas, aucun, zéro', 3, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('chasser, cueillir', 4, 1, 5)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('tous, abondants, innombrables', 5, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('tout, abondance, la vie, l''univers', 5, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('100', 5, 1, 4)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('tous, abondants, innombrables', 6, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('tout, abondance, la vie, l''univers', 6, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('100', 6, 1, 4)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('incliné vers le bas, humble, qui dépend', 7, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('différent, changé, autre', 8, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('ou', 9, 1, 1)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('resté, protégé, gardé, qui attend, qui persiste, conservé', 10, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('continuer à', 10, 1, 6)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('(avant l''objet direct)', 11, 1, 1)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('(entre plusieurs sujets)', 12, 1, 1)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('marché, boutique, foire, magasin, commerce', 13, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('chose, phénomène, objet, matière', 14, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('mauvais, négatif ; superflu, non pertinent', 15, 1, 2)`);    
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('outil, instrument, équipement, machine, appareil', 16, 1, 3)`);    
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('centre, contenu, intérieur, entre ; estomac, viscères', 17, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('dégoûtant, obscène, maladif, toxique, impur, insalubre', 18, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('être humain, personne, quelqu''un', 19, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('jaune', 20, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('avoir, porter, contenir, tenir', 21, 1, 5)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('poisson, animal sous-marin', 22, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('émettre un son ; réciter, proférer', 23, 1, 5)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('qui arrive, qui vient, futur, venu', 24, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('devenir, arriver à, réussir à', 24, 1, 6)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('plante, végétation ; herbe, feuille', 25, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('pouvoir', 26, 1, 6)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('possible', 26, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('en utilisant, avec, au moyen de', 27, 1, 7)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('fruit, légume, champignon', 28, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('objet dur, métal, pierre', 29, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('argile, pâte, poudre, substance collante, semi-solide', 30, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('air, souffle ; essence, esprit ; réalité cachée, agent invisible', 31, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('coloré, pigmenté, peint', 32, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('communauté, groupe, nation, société, tribu, compagnie', 33, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('oreille', 34, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('entendre, écouter ; faire attention à, obéir', 34, 1, 5)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('(entre le contexte et la phrase principale)', 35, 1, 1)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('dormant, se reposant', 36, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('bleu, vert', 37, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('tête', 38, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('dominer, diriger, guider, mener, posséder, régler', 38, 1, 5)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('tissu, vêtement, textile ; couverture, rideau d''intimité', 39, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('froid, frais ; cru', 40, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('(entre le sujet et son verbe, à l''exception de mi ou sina tout seul ; sert aussi à introduire un nouveau verbe pour le même sujet)', 41, 1, 1)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('petit, (un) peu, jeune', 42, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('objet long et flexible : corde, cheveu, fil, ligne', 43, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('objet plat; livre, document, carte, papier, site web', 44, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('rouge', 45, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('à, situé à, présent à, dans, sur ; réel, vrai, actuel', 46, 1, 1)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('bras, main, organe du toucher', 47, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('cinq', 47, 1, 4)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('oeil', 48, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('regarder, voir, examiner, observer, lire, surveiller', 48, 1, 5)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('chercher à, essayer de', 48, 1, 6)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('porte, trou, orifice, fenêtre', 49, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('terre, sol ; monde, lieu en plein air ; pays, territoire', 50, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('parent, ancêtre ; créateur ; celui ou celle qui prend soin', 51, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('argent, richesse ; grand animal domestiqué', 52, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('femme, femelle ; épouse', 53, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('je, moi, nous', 54, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('homme, mâle ; mari', 55, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('manger, boire, consommer, avaler', 56, 1, 5)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('mort, mourant', 57, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('dos, derrière, arrière', 58, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('(cri ou communication d''un animal)', 59, 1, 1)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('lune, astre, étoile', 60, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('artistique, divertisant, frivole, pour s''amuser', 61, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('beaucoup de, plusieurs, plus de ; très', 62, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('quantité', 62, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('-ième (nombre ordinal)', 63, 1, 1)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('nom', 63, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('étrange, insolite; fou, bête, idiot ; ivre', 64, 1, 2)`);    
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('chemin, voir ; manière, façon : coutume, méthode, doctrine', 65, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('nez ; bosse, colline, montagne ; bouton', 66, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('ce, cette', 67, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('mot, nom', 68, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('pied, jambe, organe de locomotion ; bas, dessous', 69, 1, 3)`);    
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('hé ! ô ! (vocatif ou impératif)', 70, 1, 1)`);    
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('aimer, respecter, compatir, montrer de l''affection pour', 71, 1, 5)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('il(s), elle(s)', 72, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('commencer, ouvrir, allumer', 73, 1, 5)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('brisé, cassé, abîmé, bâclé, gâché', 74, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('faire, agir sur, travailler, construire, préparer', 75, 1, 5)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('objet long et dur : bâton', 76, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('céréale ; riz, blé, orge, maïs, avoine ; pain, pâtes', 77, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('donner, envoyer, mettre, fournir, émettre, lâcher', 78, 1, 5)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('de', 79, 1, 1)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('coeur (physique et psychologique)', 80, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('qui ressent (une émotion, une expérience directe)', 80, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('noir, foncé, sombre', 81, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('fini, passé, terminé', 82, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('insecte, araignée, fourmi', 83, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('hanche, côté ; proximité', 84, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('sac, bol, récipient, tasse, placard, tiroir, vase', 85, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('bon, positif, utile ; sympa, paisible; simple', 86, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('interagissant avec le livre officiel du Toki Pona', 87, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('même, semblable; l''un l''autre ; fraternel, homologue', 88, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('comme', 88, 1, 1)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('feu ; élément de cuisson, réaction chimique, chaleur', 89, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('forme, couche extérieure, peau, écorce, pelure, peau, coquille ; limite', 90, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('quoi? quel?', 91, 1, 1)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('dessus, le haut, chose élevée', 92, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('divin, sacré, surnaturel, qui inspire le respect et la crainte', 92, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('corps, état physique, torse', 93, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('objet rond : ballon, cercle, sphère, roue, anneau', 94, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('annuel', 94, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('nouveau, frais ; encore un, de plus', 95, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('tu, toi, vous ', 96, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('avant, visage, front, mur', 97, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('image, représentation, symbole, marque, écriture', 98, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('savoir, connaître', 99, 1, 5)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('savoir', 99, 1, 6)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('animal, mammifère terrestre', 100, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('grand, lourd, long ; important ; adulte', 101, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('soleil, lumière, lueur, brillant', 102, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('surface horizontale sur laquelle on pose quelque chose', 103, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('doux, parfumé, mignon, innocent, adorable', 104, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('de, provenant de, à cause de', 105, 1, 7)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('mais, cependant', 106, 1, 1)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('seulement', 106, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('à, allant à, vers, pour, du point de vue de', 107, 1, 7)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('en mouvement, animé', 107, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('eau, liquide, fluide, substance mouillée, boisson', 108, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('temps, durée, moment, occasion, période, situation', 109, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('communiquer, parler, dire, penser', 110, 1, 5)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('espace intérieur, lieu couvert ; maison, bâtiment, édifice, pièce, chambre, chez soi, demeure', 111, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('deux', 112, 1, 4)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('avoir des rapports sexuels ou conjugaux avec', 113, 1, 5)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('bouche, lèvres, cavité buccale, mâchoire', 114, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('se battre contre, lutter contre', 115, 1, 5)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('blanc, clair, pâle', 116, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('unique, uni', 117, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('un', 117, 1, 4)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('oiseau, créature volante, animal ailé', 118, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('fort, puissant, ; sûr, confiant ; énéergique, intense', 119, 1, 3)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('absent, enlevé, éloigné', 120, 1, 2)`);
        await queryRunner.query(`INSERT INTO definition_entity (description, "wordId", "translationId", "posId") VALUES ('devoir, avoir besoin de , vouloir ', 121, 1, 6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM definition_entity`);
        await queryRunner.query(`DELETE FROM word_entity`);
        await queryRunner.query(`DELETE FROM translation_entity`);
        await queryRunner.query(`DELETE FROM pos_entity`);
    }

}
