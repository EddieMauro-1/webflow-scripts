// ═══════════════════════════════════════
// Terra Cognita — Exported Timeline
// ═══════════════════════════════════════
(function(){
'use strict';

// ── Data (injected by Jinja) ──
const EVENTS = [{"id": 140, "title": "José Liborio Dávila Lozano en Lérida", "description": "José Liborio Dávila Lozano está presente en Lérida, Tolima desde aproximadamente este año. Participaría activamente en compra-ventas de terrenos y sería uno de los antecesores de la fundación de El Líbano.", "date_text": "1840", "date_start": "1840", "date_end": "", "category": "migracion", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/gemini_025dcb4bd521.jpg", "image_data": null, "period_id": null, "position_preference": "top"}, {"id": 141, "title": "Muerte del general Luis Francisco de Rieux", "description": "Luis Francisco de Rieux, francés y general, vecino de Honda, Armero y Mariquita, muere en su hacienda llamada 'Peladeros'. Según Roberto Marín, pudo haber sido uno de los exploradores de las tierras de El Líbano. Al parecer, fue el que trajo a las tierras del Tolima a Eduard Milou, uno de los antecesores de El Líbano.", "date_text": "26 de septiembre de 1840", "date_start": "1840-09-26", "date_end": "", "category": "muerte", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "top"}, {"id": 142, "title": "Inicio del proceso de fundación de Neira", "description": "Se inicia el proceso de fundación de Neira con la negociación de terrenos (1841-1844) por parte de González y Salazar.", "date_text": "1841", "date_start": "1841", "date_end": "1844", "category": "fundacion", "color": "#487548", "icon": "event", "image_url": "", "image_data": null, "period_id": 4, "position_preference": "top"}, {"id": 143, "title": "Fin de expediciones de Vicente Fermín López Buitrago", "description": "El arriero Vicente Fermín López Buitrago culmina sus expediciones por la región (1835-1842). Sus exploraciones previas fueron fundamentales para las futuras incursiones de los colonizadores antioqueños.", "date_text": "1842", "date_start": "1842", "date_end": "", "category": "descubrimiento", "color": "#39a275", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/gemini_4bca2d94f86d.jpg", "image_data": null, "period_id": 5, "position_preference": "top"}, {"id": 147, "title": "Descubrimiento de la quebrada de Olivares y origen del nombre Manizales", "description": "Nicolás Echeverri y Marcelino Palacio exploran la zona de la Guacaica y descubren la quebrada de Olivares y otra llena de granitos llamada 'maní', a la cual le pusieron como nombre Manizales, Caldas.", "date_text": "1843", "date_start": "1843", "date_end": "", "category": "descubrimiento", "color": "#7b9f19", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/gemini_f9e4c562acfd.jpg", "image_data": null, "period_id": 6, "position_preference": "bottom"}, {"id": 144, "title": "Expedición de José Joaquín Arango al 'Paraíso Terrenal'", "description": "José Joaquín Arango Restrepo parte desde Abejorral hacia la región de la Guacaica buscando una mina al sur de Neira. Se topa con las tierras que llamó 'Paraíso Terrenal' y se encuentra con Nicolás Echeverri Díaz en Salamina.", "date_text": "Marzo de 1843", "date_start": "1843-03", "date_end": "", "category": "descubrimiento", "color": "#7b9f19", "icon": "event", "image_url": "", "image_data": null, "period_id": 6, "position_preference": "bottom"}, {"id": 146, "title": "1ra Expedición científica al Nevado del Ruiz", "description": "Marcelino Palacio Restrepo, el ingeniero alemán Guillermo Degenhart y Ramón Henao parten desde Salamina hacia Chinchiná y La María, llegando al Nevado del Ruiz en la primera expedición científica.", "date_text": "Julio de 1843", "date_start": "1843-07", "date_end": "", "category": "descubrimiento", "color": "#7b9f19", "icon": "event", "image_url": "", "image_data": null, "period_id": 6, "position_preference": "bottom"}, {"id": 145, "title": "Neira constituida como fracción de Salamina", "description": "Queda constituida la población de Neira como fracción dependiente de Salamina.", "date_text": "10 de junio de 1843", "date_start": "1843-06-10", "date_end": "", "category": "fundacion", "color": "#487548", "icon": "event", "image_url": "", "image_data": null, "period_id": 4, "position_preference": "top"}, {"id": 148, "title": "Neira erigida en distrito parroquial", "description": "Neira es erigida en distrito parroquial, avanzando en su consolidación como población formal.", "date_text": "31 de octubre de 1844", "date_start": "1844-10-31", "date_end": "", "category": "fundacion", "color": "#487548", "icon": "event", "image_url": "", "image_data": null, "period_id": 4, "position_preference": "auto"}, {"id": 153, "title": "Los Arango cruzan el Ruiz por el sur hasta Lérida", "description": "Los Arango deciden cruzar el Ruiz por el sur. En Salento un cura les da carta de recomendación. En Ibagué se reúnen con el gobernador y llegan a Lérida donde el alcalde Felipe Terreros les provee un guía hasta Boquerón.", "date_text": "1845", "date_start": "1845", "date_end": "", "category": "descubrimiento", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 150, "title": "1ra Gran Expedición al Ruiz desde Neira", "description": "Joaquín Arango, Antonio María Arango, Nicolás Echeverri y otros salen desde Neira a explorar el Ruiz con 11 bueyes. Después de 10 días descubren la Cueva de Nieto y la Cueva del Toro, zonas de descanso del 'Camino del Ruiz'.", "date_text": "Enero de 1845", "date_start": "1845-01", "date_end": "", "category": "descubrimiento", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 149, "title": "Neira establecida oficialmente", "description": "Neira queda establecida oficialmente como población.", "date_text": "1 de enero de 1845", "date_start": "1845-01-01", "date_end": "", "category": "fundacion", "color": "#487548", "icon": "event", "image_url": "", "image_data": null, "period_id": 4, "position_preference": "auto"}, {"id": 152, "title": "Segunda expedición al Ruiz por Arango y Grisales", "description": "Joaquín y Antonio María Arango, con Manuel María Grisales Valencia y Pedro Henao, emprenden nueva expedición al Ruiz. Debido al derrumbe no pueden cruzar y esperan 45 días.", "date_text": "Abril de 1845", "date_start": "1845-04", "date_end": "", "category": "descubrimiento", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 151, "title": "Erupción del Nevado del Ruiz", "description": "Erupción del Nevado del Ruiz que lanza gran cantidad de lava al exterior, dejando un gran derrumbe en las zonas aledañas y bloqueando el paso por el río Lagunilla.", "date_text": "19 de febrero de 1845", "date_start": "1845-02-19", "date_end": "", "category": "evento", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/gemini_9dd34f524037.jpg", "image_data": null, "period_id": null, "position_preference": "top"}, {"id": 154, "title": "Intento de establecer población en La Enea", "description": "Dieciséis colonizadores salen de San Cancio buscando establecer una población, incluyendo a los Arango, Marcelino Palacio y Nicolás Echeverri. Intentan fundar en 'La Enea'.", "date_text": "1846", "date_start": "1846", "date_end": "", "category": "fundacion", "color": "#7b9f19", "icon": "event", "image_url": "", "image_data": null, "period_id": 6, "position_preference": "bottom"}, {"id": 155, "title": "Expedición de los 20 y establecimiento en Morrogancho", "description": "Los colonizadores se reúnen en 'Rastrojos' o 'San Cancio', determinan deberes comunitarios como la 'Roza de Comunidad' y establecen la población en 'Morrogancho', precursora de Manizales.", "date_text": "1848", "date_start": "1848", "date_end": "", "category": "fundacion", "color": "#7b9f19", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/gemini_6c644366dfd4.jpg", "image_data": null, "period_id": 6, "position_preference": "auto"}, {"id": 156, "title": "Decreto de adjudicación de tierras para nueva población", "description": "Se decreta la adjudicación de 12,000 fanegadas de tierra baldía en las inmediaciones de 'Montaño' para la nueva población que sería Manizales.", "date_text": "29 de diciembre de 1848", "date_start": "1848-12-29", "date_end": "", "category": "politico", "color": "#7b9f19", "icon": "event", "image_url": "", "image_data": null, "period_id": 6, "position_preference": "bottom"}, {"id": 157, "title": "Decreto para creación de población en zona de El Líbano", "description": "Decreto del gobierno de José Hilario López para la creación de una población entre la quebrada San Juan y el río Vallecitos. Se crea una comisión en la alcaldía de Peladeros (Lérida, Tolima) en cabeza de Bruno José Ayala. Cada colono-poblador recibiría 50 fanegadas.", "date_text": "23 de abril de 1849", "date_start": "1849-04-23", "date_end": "", "category": "politico", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/gemini_a72cee131ed0.jpg", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 159, "title": "Establecimiento de la población de Manizales", "description": "Se establece la nueva población denominada 'Manizales', con límites entre la Provincia de Antioquia y la del Cauca.", "date_text": "1 de octubre de 1849", "date_start": "1849-10-01", "date_end": "", "category": "fundacion", "color": "#7b9f19", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/gemini_a3e2cad82835.jpg", "image_data": null, "period_id": 6, "position_preference": "bottom"}, {"id": 161, "title": "Repartición de 294 solares en Manizales", "description": "Se realiza la repartición de solares a los nuevos pobladores de Manizales, con un total de 294 reparticiones. Entre los beneficiados, estuvo Nicolás Echeverri Díaz.", "date_text": "Mediados de 1850", "date_start": "1850", "date_end": "", "category": "politico", "color": "#7b9f19", "icon": "event", "image_url": "", "image_data": null, "period_id": 6, "position_preference": "bottom"}, {"id": 162, "title": "Inicio de reparticiones de tierras en El Líbano", "description": "Se inician las reparticiones de tierras en El Líbano bajo el decreto de 1849.", "date_text": "1850", "date_start": "1850", "date_end": "", "category": "politico", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "top"}, {"id": 160, "title": "Primer gabinete de Manizales", "description": "Benito Álvarez nombra el primer gabinete de Manizales: Antonio Ceballos como primer alcalde, Antonio María Arango como primer juez y Joaquín Arango como primer procurador municipal.", "date_text": "1 de enero de 1850", "date_start": "1850-01-01", "date_end": "", "category": "politico", "color": "#7b9f19", "icon": "event", "image_url": "", "image_data": null, "period_id": 6, "position_preference": "bottom"}, {"id": 163, "title": "Nicolás Echeverri migra de Manizales a El Líbano", "description": "Nicolás Echeverri sale 'enfadado' de Manizales por desacuerdos con los pobladores. Se instaura en Sabanalarga, luego Casas Viejas, Las Granjas y Las Granjitas. Según las crónicas, 'vinieron de Manizales al Líbano con una novilla, un perro y un marrano, por la trocha del Ruiz'. Estos colonos antioqueños estarían de facto cumpliendo con las condiciones del decreto del año 1849.", "date_text": "1851", "date_start": "1851", "date_end": "", "category": "migracion", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/p9_34762407cd814cc1ba23a131bf6cd4ee.jpg", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 164, "title": "Asesinato de Elías González Villegas, fundador de Salamina", "description": "Muere asesinado don Elías González Villegas, líder fundacional de Neira. Uno de los fundadores de la \"Compañía González, Salazar y Cía\", y de los más ricos terratenientes que luchó en contra de los colonos antioqueños.", "date_text": "6 de abril de 1851", "date_start": "1851-04-06", "date_end": "", "category": "muerte", "color": "#487548", "icon": "event", "image_url": "", "image_data": null, "period_id": 4, "position_preference": "auto"}, {"id": 165, "title": "Abolición oficial de la esclavitud", "description": "La abolición oficial de la esclavitud en Colombia se decretó mediante la Ley del 21 de mayo de 1851, sancionada por el presidente José Hilario López. Esta ley estableció que todos los esclavos existentes en el territorio nacional serían formalmente libres a partir del 1 de enero de 1852", "date_text": "21 de mayo de 1851", "date_start": "1851-05-21", "date_end": "", "category": "politico", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/gemini_ed2726798b06.jpg", "image_data": null, "period_id": null, "position_preference": "bottom"}, {"id": 166, "title": "Manuel Pombo documenta el caserío de El Líbano", "description": "Manuel Pombo documenta la existencia del caserío de El Líbano durante su paso, describiendo familias y antioqueños ya establecidos entre Sabanalarga y la Laguna Colorada. Primera referencia de El Líbano, Tolima.", "date_text": "1852", "date_start": "1852", "date_end": "", "category": "evento", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/gemini_08045fe789a2.jpg", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 214, "title": "Fundación de Facto de El Líbano", "description": "Entre los años 1849 hasta 1853 se debió fundar el caserío de \"El Líbano\", una zona derivada de una casa con el mismo nombre que le dio Liborio Dávila, según fuentes orales, por un \"cedro hermosísimo\" que le recordó a los cedros del Líbano bíblico.", "date_text": "1852", "date_start": "1852", "date_end": "", "category": "fundacion", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "top"}, {"id": 167, "title": "Establecimiento final de Neira en nueva ubicación", "description": "Establecimiento final de Neira en su nueva ubicación, después de su traslado.", "date_text": "19 de octubre de 1852", "date_start": "1852-10-19", "date_end": "", "category": "fundacion", "color": "#487548", "icon": "event", "image_url": "", "image_data": null, "period_id": 4, "position_preference": "top"}, {"id": 168, "title": "Désiré Angée acapara tierras en El Líbano", "description": "Désiré Angée recibe formalmente sus tierras. Compra 18 derechos a 13 beneficiarios, acaparando tierras en Tejos, Sebastopol, Mosquero y Laguna Colorada. Trae 7 familias del interior, incluyendo los hermanos Carbonell.", "date_text": "1853", "date_start": "1853", "date_end": "", "category": "economico", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/p9_549cc34d8c48407a97e3d9e3e7c6f05b.jpg", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 169, "title": "Repartición de tierras rurales en Manizales", "description": "Se realiza la repartición de tierras en la zona rural de Manizales.", "date_text": "6 de junio de 1853", "date_start": "1853-06-06", "date_end": "", "category": "politico", "color": "#7b9f19", "icon": "event", "image_url": "", "image_data": null, "period_id": 6, "position_preference": "auto"}, {"id": 170, "title": "Erección de Aranzazu", "description": "Se toma como fecha de erección de Aranzazu como nueva población.", "date_text": "9 de noviembre de 1853", "date_start": "1853-11-09", "date_end": "", "category": "fundacion", "color": "#487548", "icon": "event", "image_url": "", "image_data": null, "period_id": 4, "position_preference": "auto"}, {"id": 158, "title": "Acaparamiento de tierras por la 'liga de los aprovechados'", "description": "El decreto de creación de la población provoca que funcionarios y acaudalados busquen obtener tierras con artimañas, incluyendo a Felipe Terreros, Fernando Escobar, el presbítero Agustín Reyes y Bruno J. Ayala.", "date_text": "1854", "date_start": "1854", "date_end": "", "category": "evento", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "bottom"}, {"id": 171, "title": "Irregularidades en repartición de tierras en El Líbano", "description": "Se repartieron un total de 12,250 fanegadas entre 1850-1854 a 245 personas en El Líbano. Casi el 40% de las reparticiones fueron reportadas con irregularidades.", "date_text": "1854", "date_start": "1854", "date_end": "1854", "category": "politico", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 172, "title": "Aprobación legislativa para Aranzazu y últimas reparticiones en El Líbano", "description": "Se hace efectiva la aprobación de la legislatura de Rionegro para Aranzazu. Se realizan las últimas reparticiones de lotes en El Líbano bajo el decreto de 1849.", "date_text": "1 de enero de 1854", "date_start": "1854-01-01", "date_end": "", "category": "politico", "color": "#487548", "icon": "event", "image_url": "", "image_data": null, "period_id": 4, "position_preference": "top"}, {"id": 173, "title": "Establecimiento de La Granja y La Granjita", "description": "Establecimiento de 'La Granja' y 'La Granjita', los puntos más lejanos fundados por los colonos antioqueños en la zona de El Líbano, Tolima por quienes venían con el arriero Nicolás Echeverri.", "date_text": "1855", "date_start": "1855", "date_end": "1856", "category": "fundacion", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/gemini_c8a5d19b7524.jpg", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 174, "title": "Cambio de nombre de Aranzazu", "description": "Se cambia el nombre de Aranzazu, que anteriormente se denominaba Sargento.", "date_text": "22 de agosto de 1855", "date_start": "1855-08-22", "date_end": "", "category": "politico", "color": "#487548", "icon": "event", "image_url": "", "image_data": null, "period_id": 4, "position_preference": "top"}, {"id": 176, "title": "Migración de colonos e Isidro Parra hacia Caldas", "description": "La Guerra de las Soberanías propicia la migración definitiva de Isidro Parra y la intención de fundación de El Líbano. Los colonos antioqueños llegan a Manizales desde Granada, Antioquia y varios participan en la guerra civil.", "date_text": "1860", "date_start": "1860", "date_end": "", "category": "migracion", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/gemini_62101094041e.jpg", "image_data": null, "period_id": null, "position_preference": "bottom"}, {"id": 177, "title": "Constitución de Rionegro", "description": "Culmina la guerra con la Constitución de Rionegro, que establece el federalismo radical liberal en Colombia.", "date_text": "1862", "date_start": "1862", "date_end": "", "category": "politico", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 178, "title": "Familia de Isidro Parra se establece en Villamaría", "description": "La familia de Isidro Parra se establece en Villamaría en 1863, después de la resistencia de Manizales como fortín conservador.", "date_text": "1863", "date_start": "1863", "date_end": "", "category": "migracion", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 179, "title": "Isidro Parra llega a El Líbano", "description": "Isidro Parra llega a El Líbano, Tolima y emprende junto con los antioqueños la fundación del poblado.", "date_text": "1864", "date_start": "1864", "date_end": "", "category": "fundacion", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/p9_a4e61ac5ffe7.jpg", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 180, "title": "Misa del padre Agustín Reyes en casa de Liborio Dávila", "description": "El padre Agustín Reyes oficia una misa importante en casa de don Liborio Dávila, usando como altar el tronco de un cedro recién cortado.", "date_text": "Noviembre de 1864", "date_start": "1864-11", "date_end": "", "category": "religioso", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 181, "title": "Isidro Parra emprende fundación de la aldea en Tejos", "description": "Isidro Parra asume la tarea de fundar la aldea en el punto de Tejos, enfrentándose a Désiré Angée y Fernando Escobar por los terrenos.", "date_text": "1865–1866", "date_start": "1865", "date_end": "1866", "category": "fundacion", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/p9_2a11c11671ee44769a2fde75c0cd158a.jpg", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 182, "title": "Fundación legal de la aldea de El Líbano", "description": "Se promulga el Decreto de la erección de la aldea de El Líbano, Tolima y se establecen meses después los límites del nuevo poblado. El pleito de Angée se extiende hasta 1868. Fundación legal del poblado.", "date_text": "27 de enero de 1866", "date_start": "1866-01-27", "date_end": "", "category": "fundacion", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/p9_3d1870f9472b.jpg", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 183, "title": "Primer acto sacramental en la Iglesia de El Líbano", "description": "Se registra el primer acto sacramental en la Iglesia de El Líbano. El cura Jerónimo González realiza los primeros 39 registros. Se denomina 'Aldea del Líbano'.", "date_text": "8 de enero de 1869", "date_start": "1869-01-08", "date_end": "", "category": "religioso", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/p9_6de933d418db.jpg", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 184, "title": "Construcción del primer templo de El Líbano", "description": "Construcción del primer templo de El Líbano. Misa solemne de inauguración oficiada por el padre Medina. Se denominaba inicialmente 'San Antonio del Líbano'.", "date_text": "1870", "date_start": "1870", "date_end": "", "category": "construccion", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/p9_efa32ba58fdb.jpg", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 185, "title": "Fundación de Murillo (Vallecitos)", "description": "Fundación de Murillo (Vallecitos), resultado del Camino del Ruiz. Concesión inicial de 7,680 hectáreas. Las zonas aledañas eran frecuentadas por la familia Echeverri. Gran parte de los terrenos pertenecieron a la familia Terreros.", "date_text": "1871", "date_start": "1871", "date_end": "", "category": "fundacion", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 187, "title": "Nueva repartición de lotes en El Líbano", "description": "Se realiza una nueva y final repartición de lotes en El Líbano, tanto urbana como rural, con predominio de población antioqueña. Nicolás Echeverri recibe lote rural donde está localizado 'La Granja'. Sus familiares y descendientes otras zonas.", "date_text": "1874", "date_start": "1874", "date_end": "", "category": "politico", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/p9_a87f02b56488.jpg", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 186, "title": "Primera visita pastoral a El Líbano", "description": "Primera visita pastoral a El Líbano por el prelado Vicente Arbeláez, de la Arquidiócesis de Bogotá.", "date_text": "22 de junio de 1874", "date_start": "1874-06-22", "date_end": "", "category": "religioso", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 189, "title": "Nicolás Echeverri forma batallones conservadores", "description": "Nicolás Echeverri Díaz recibe órdenes de los conservadores para formar batallones en Villahermosa, Soledad y Santo Domingo. Se moviliza a Fresno y toma Falán para esperar la marcha de Marceliano Vélez.", "date_text": "1876", "date_start": "1876", "date_end": "", "category": "batalla", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 191, "title": "Muerte de Nicolás Echeverri Díaz en combate", "description": "Muerte de Nicolás Echeverri Díaz, legendario colonizador antioqueño y uno de los fundadores de El Líbano, Manizales, y antecesor de otras. Muere en combate en Falán cubriendo la retirada de Marceliano Vélez, defendiendo la causa conservadora. Tenía aproximadamente 85 años.", "date_text": "1876", "date_start": "1876-12", "date_end": "", "category": "muerte", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/p9_fa6bab937724.jpg", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 190, "title": "Batalla de la Garrapata", "description": "Libanenses participan en la Batalla de la Garrapata, uno de los enfrentamientos más sangrientos del siglo XIX. Isidro Parra lidera como Coronel del Batallón No. 4 del Tolima. Al término es nombrado General.", "date_text": "19–22 de noviembre de 1876", "date_start": "1876-11-19", "date_end": "1876-11-22", "category": "batalla", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/p9_37c4779c4956.jpg", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 194, "title": "Crecimiento poblacional de El Líbano post-fundación", "description": "Desde 1880, el crecimiento poblacional de El Líbano es representativo y se mantiene hasta 1895-1896. Época de la 'post-fundación' con alta tasa de natalidad.", "date_text": "1880", "date_start": "1880", "date_end": "1896", "category": "evento", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 215, "title": "Traslado definitivo de Jean Molédoux a El Líbano", "description": "Había llegado a Colombia originalmente en el año 1850 junto a su hermano Joseph Moulédous, radicándose primero en Medellín, Santa Rosa de Osos y posteriormente en la región de Fálan. Es el extranjero con mayor impacto poblacional en El Líbano (descendencia). Trabajaba como minero,", "date_text": "1880", "date_start": "1880", "date_end": "", "category": "evento", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/p9_7f06540aaea54f398f7a31b0bcbbfa71.jpg", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 196, "title": "Testamento de Désiré Angée", "description": "Désiré Angée (nacido aproximadamente en 1816) testa en El Líbano. Proceso de mortuoria es del 11 de enero de 1887 de Désiré Angée en la notaría de Ambalema. Declara como único hijo natural a 'Dagoberto' Angée. Muere posiblemente a principios de 1887.", "date_text": "4 de enero de 1885", "date_start": "1885-01-04", "date_end": "", "category": "muerte", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/p9_342529562cc9.jpg", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 197, "title": "Constitución de 1886", "description": "Reforma constitucional con la Constitución de 1886. Se restablecen poderes a la Iglesia católica. Fin del 'Olimpo Radical'.", "date_text": "1886", "date_start": "1886", "date_end": "", "category": "politico", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 198, "title": "Llegada de Carlos Loboguerrero, primer boticario de El Líbano", "description": "Carlos Loboguerrero Gutiérrez, bogotano y primer boticario del Líbano, llega en 1886, casado con Juana María Echeverri Ceballos, descendiente de Nicolás Echeverri.", "date_text": "1886", "date_start": "1886", "date_end": "", "category": "migracion", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 201, "title": "Francisco Antonio González asume como párroco de El Líbano", "description": "Francisco Antonio González asume como párroco de El Líbano (hasta 1897). Describe el templo en malas condiciones: paredes de bahareque, techo de astilla en mal estado.", "date_text": "Noviembre de 1892", "date_start": "1892-11", "date_end": "", "category": "religioso", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 203, "title": "Muerte de Rafael Núñez y sucesión de Miguel Antonio Caro", "description": "Muere Rafael Núñez. Le sucede Miguel Antonio Caro en la presidencia de Colombia.", "date_text": "1894", "date_start": "1894", "date_end": "", "category": "muerte", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 205, "title": "Asesinato de Isidro Parra, fundador de El Líbano", "description": "Asesinato de Isidro Parra, fundador de El Líbano, en 'Hoyofrío'. Mientras dormía fue atacado por una comisión liderada por el comandante conservador Luis María Arango. Su cuerpo fue trasladado amarrado y desnudo, abandonado en la plaza como escarnio público.", "date_text": "17 de marzo de 1895", "date_start": "1895-03-17", "date_end": "", "category": "muerte", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 206, "title": "Muerte del cura Agustín Reyes Parra", "description": "Muere el cura Agustín Reyes Parra, párroco de Lérida y El Líbano.", "date_text": "7 de agosto de 1895", "date_start": "1895-08-07", "date_end": "", "category": "muerte", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 207, "title": "Informe del párroco González sobre estado del templo", "description": "Informe del párroco Francisco Antonio González sobre el estado del templo. La iglesia se denomina brevemente 'Parroquia del Líbano'.", "date_text": "1896", "date_start": "1896", "date_end": "", "category": "religioso", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 208, "title": "La iglesia adopta el nombre 'Nuestra Señora del Carmen del Líbano'", "description": "La iglesia adopta oficialmente el nombre de 'Nuestra Señora del Carmen del Líbano'. El párroco José María de P. Ramírez N. realiza 290 registros sacramentales.", "date_text": "1897", "date_start": "1897", "date_end": "", "category": "religioso", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 209, "title": "Descontento liberal y rechazo de ley electoral", "description": "Descontento generalizado de liberales al ser rechazada una ley electoral, sembrando las semillas de la futura Guerra de los Mil Días.", "date_text": "1898", "date_start": "1898", "date_end": "", "category": "politico", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 210, "title": "Inicio de la Guerra de los Mil Días", "description": "Inicia la Guerra de los Mil Días, una de las mayores tragedias de Colombia y el conflicto civil más grande de la historia del país. Se inicia con acciones bélicas en Santander y se extiende a todo el país.", "date_text": "Noviembre de 1899", "date_start": "1899-11", "date_end": "", "category": "batalla", "color": "#3794cd", "icon": "event", "image_url": "https://cdn.jsdelivr.net/gh/EddieMauro-1/webflow-scripts@main/img-linea-tiempo-historia-de-el-libano-tolima/p9_b6e42d2d24a0.jpg", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 211, "title": "La guerra llega al Tolima y El Líbano", "description": "La guerra llega al Tolima con acciones de guerrilla. Numerosos libanenses participan en ambos bandos. Conservadores como Manuel Casabianca y liberales como los hijos de Isidro Parra se enfrentan.", "date_text": "1899", "date_start": "1899-11", "date_end": "1900", "category": "batalla", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 212, "title": "Muerte del cura Luis Javier España en combate", "description": "El cura Luis Javier España, presbítero jesuita guatemalteco, cura de El Líbano, toma las armas para defender la facción conservadora. Es ascendido a Coronel y fallece en combate en el Alto de la Cruz, cerca a Viotá, Cundinamarca.", "date_text": "1900", "date_start": "1900", "date_end": "", "category": "muerte", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}, {"id": 213, "title": "Impacto de la guerra en El Líbano", "description": "La guerra causa grandes pérdidas humanas, materiales y económicas en El Líbano. Se evidencia pérdida del ritmo de la tasa de natalidad y emigración hacia ciudades más grandes.", "date_text": "1900", "date_start": "1900", "date_end": "", "category": "muerte", "color": "#3794cd", "icon": "event", "image_url": "", "image_data": null, "period_id": null, "position_preference": "auto"}];
const PERIODS = [{"id": 5, "name": "Exploraciones de Fermín López", "description": "", "date_start_text": "1835", "date_start": "", "date_end_text": "1842", "date_end": "", "color": "#39a275", "visible": true, "side": "auto", "title_position": "end"}, {"id": 6, "name": "Proceso fundacional de Manizales", "description": "", "date_start_text": "1830", "date_start": "", "date_end_text": "1854", "date_end": "", "color": "#7b9f19", "visible": true, "side": "auto", "title_position": "timeline_start"}, {"id": 7, "name": "Guerra de la soberania", "description": "Guerra de las Soberanías o 'Guerra Magna'. El presidente conservador Mariano Ospina Rodríguez desata la furia de las guerrillas liberales. Los liberales ganan la guerra.", "date_start_text": "1860", "date_start": "", "date_end_text": "1863", "date_end": "", "color": "#ef4444", "visible": true, "side": "auto", "title_position": "start"}, {"id": 8, "name": "Guerra de las Escuelas", "description": "Guerra de las Escuelas causada por el descontento conservador con las políticas de quitar poder a la Iglesia y establecer educación laica. La guerra termina con la toma de Antioquia por parte de los liberales y el sometimiento de guerrillas conservadoras.", "date_start_text": "1876", "date_start": "", "date_end_text": "1877", "date_end": "", "color": "#ef4444", "visible": true, "side": "auto", "title_position": "start"}, {"id": 9, "name": "Primera presidencia de Rafael Núñez y la Regeneración", "description": "Período de relativa paz. Aumento de popularidad de Rafael Núñez y su coalición bi-partidista, la 'Regeneración' y el Partido Nacional. Primera presidencia entre 1880-1882.", "date_start_text": "1880", "date_start": "", "date_end_text": "1886", "date_end": "", "color": "#aa3194", "visible": true, "side": "below", "title_position": "start"}, {"id": 14, "name": "Proceso fundacional de El Líbano", "description": "", "date_start_text": "1849", "date_start": "", "date_end_text": "1874", "date_end": "", "color": "#3794cd", "visible": true, "side": "auto", "title_position": "center"}, {"id": 4, "name": "Colonización Antioqueña", "description": "Periodo de llegada y asentamiento de colonos antioqueños en la región del norte del Tolima, incluyendo la fundación y consolidación de El Líbano.", "date_start_text": "1820", "date_start": "1820", "date_end_text": "1900", "date_end": "1900", "color": "#487548", "visible": true, "side": "above", "title_position": "timeline_start"}, {"id": 13, "name": "Olimpo Radical", "description": "Período de hegemonía del liberalismo radical en Colombia bajo la Constitución de Rionegro (1863). Se caracterizó por el federalismo extremo, la separación Iglesia-Estado, las libertades absolutas y reformas educativas. Finalizó con el ascenso de Rafael Núñez y el proyecto de la Regeneración, que culminó con la Constitución centralista de 1886. Este período fue formativo para la identidad liberal de El Líbano, donde Isidro Parra y otros colonos radicales se establecieron.", "date_start_text": "1863", "date_start": "1863", "date_end_text": "1886", "date_end": "1886", "color": "#b43131", "visible": true, "side": "auto", "title_position": "start"}, {"id": 10, "name": "Guerra civil de 1884-1885", "description": "Nueva guerra civil, relativamente corta. Derrota liberal.", "date_start_text": "1884–1885", "date_start": "1884", "date_end_text": "", "date_end": "1885", "color": "#ef4444", "visible": true, "side": "auto", "title_position": "start"}, {"id": 11, "name": "Guerra civil de 1895", "description": "Fugaz conflicto de dos meses. Liberales radicales se alzan contra el Partido Nacional.", "date_start_text": "1895", "date_start": "1895-01", "date_end_text": "1895", "date_end": "1895-03", "color": "#ef4444", "visible": true, "side": "auto", "title_position": "start"}, {"id": 12, "name": "Guerra de los Mil Días", "description": "El conflicto armado más devastador de la Colombia del siglo XIX. Enfrentó a liberales contra el gobierno conservador de la Regeneración. Dejó más de 100,000 muertos, devastó la economía nacional y condujo a la separación de Panamá. En el norte del Tolima, El Líbano fue escenario importante de la guerra de guerrillas liderada por figuras como Isidro Parra.", "date_start_text": "17 de octubre de 1899", "date_start": "1899-10-17", "date_end_text": "21 de noviembre de 1902", "date_end": "1902-11-21", "color": "#ef4444", "visible": true, "side": "auto", "title_position": "start"}];
const CATEGORY_ICONS = {"default": "event", "evento": "event", "nacimiento": "cake", "muerte": "deceased", "boda": "favorite", "batalla": "swords", "fundacion": "flag", "tratado": "handshake", "descubrimiento": "explore", "construccion": "construction", "politico": "gavel", "cultural": "palette", "religioso": "church", "economico": "attach_money", "migracion": "transfer_within_a_station", "otro": "more_horiz"};
const CATEGORY_LABELS = {"evento": "Evento", "nacimiento": "Nacimiento", "muerte": "Muerte", "boda": "Boda", "batalla": "Batalla", "fundacion": "Fundacion", "tratado": "Tratado", "descubrimiento": "Descubrimiento", "construccion": "Construccion", "politico": "Politico", "cultural": "Cultural", "religioso": "Religioso", "economico": "Economico", "migracion": "Migracion", "otro": "Otro"};
const CATEGORY_COLORS = {"evento": "#d4af37", "nacimiento": "#22c55e", "muerte": "#6b7280", "boda": "#ec4899", "batalla": "#ef4444", "fundacion": "#3b82f6", "tratado": "#8b5cf6", "descubrimiento": "#06b6d4", "construccion": "#f59e0b", "politico": "#6366f1", "cultural": "#a855f7", "religioso": "#14b8a6", "economico": "#f97316", "migracion": "#0ea5e9", "otro": "#78716c"};

// ── State ──
let zoomLevel = 1;
let selectedEventId = null;
let initialZoomSet = false;
let overviewDragging = null;
let verticalScrollSet = false;
const periodPositions = {};

// ── DOM refs ──
const viewport = document.getElementById('tl-viewport');
const canvas = document.getElementById('tl-canvas');
const eventsContainer = document.getElementById('tl-events');
const connectorsContainer = document.getElementById('tl-connectors');
const dateLabelsContainer = document.getElementById('tl-date-labels');
const periodLinesContainer = document.getElementById('tl-period-lines');
const periodLabelOverlay = document.getElementById('tl-period-label-overlay');
const detailPanel = document.getElementById('tl-detail');
const detailBody = document.getElementById('detail-body');

// ── Date Parsing ──
function parseDate(str) {
    if (!str) return 0;
    // ISO YYYY-MM-DD
    let m = str.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
    if (m) return new Date(+m[1], +m[2]-1, +m[3]).getTime();
    // YYYY-MM
    m = str.match(/^(\d{4})-(\d{1,2})$/);
    if (m) return new Date(+m[1], +m[2]-1, 1).getTime();
    // Year only
    m = str.match(/^(\d{4})$/);
    if (m) return new Date(+m[1], 0, 1).getTime();
    // Spanish: "15 de agosto de 1549"
    const MONTHS = {ene:0,enero:0,feb:1,febrero:1,mar:2,marzo:2,abr:3,abril:3,may:4,mayo:4,jun:5,junio:5,jul:6,julio:6,ago:7,agosto:7,sep:8,septiembre:8,oct:9,octubre:9,nov:10,noviembre:10,dic:11,diciembre:11};
    m = str.match(/(\d{1,2})\s+(?:de\s+)?([a-z\u00e1\u00e9\u00ed\u00f3\u00fa\u00f1\u00fc]+)\s+(?:de\s+)?(\d{3,4})/i);
    if (m) { const mi = MONTHS[m[2].toLowerCase()]; if (mi !== undefined) return new Date(+m[3], mi, +m[1]).getTime(); }
    m = str.match(/([a-z\u00e1\u00e9\u00ed\u00f3\u00fa\u00f1\u00fc]+)\s+(\d{3,4})/i);
    if (m) { const mi = MONTHS[m[1].toLowerCase()]; if (mi !== undefined) return new Date(+m[2], mi, 1).getTime(); }
    const ym = str.match(/(\d{4})/);
    if (ym) return new Date(+ym[1], 0, 1).getTime();
    return 0;
}

// ── Escape HTML ──
function esc(text) {
    const d = document.createElement('div');
    d.textContent = text || '';
    return d.innerHTML;
}

// ══════════════════════════════
// RENDER TIMELINE
// ══════════════════════════════

// ── Mode Management ──
const FORCE_VERTICAL = false;
const MOBILE_FORCE_VERTICAL = true;
const MOBILE_BREAKPOINT = 768;
let _currentMode = FORCE_VERTICAL ? 'vertical' : 'horizontal';
let _userToggledVertical = null; // null = no user override, true/false = user choice

function _isVerticalMode() {
    if (FORCE_VERTICAL) return true;
    if (MOBILE_FORCE_VERTICAL && window.innerWidth <= MOBILE_BREAKPOINT) return true;
    if (_userToggledVertical !== null) return _userToggledVertical;
    return false;
}

function _applyMode() {
    const shouldBeVertical = _isVerticalMode();
    const newMode = shouldBeVertical ? 'vertical' : 'horizontal';

    if (newMode === _currentMode && eventsContainer.children.length > 0) return; // no change needed
    _currentMode = newMode;

    if (shouldBeVertical) {
        document.body.classList.add('tl-vertical');
    } else {
        document.body.classList.remove('tl-vertical');
    }
}

function renderTimeline() {
    _applyMode();
    if (_currentMode === 'vertical') {
        _renderVertical();
    } else {
        _renderHorizontal();
    }
}

// ── Vertical Mode State & Helpers ──
let _vMinYear = 0, _vMaxYear = 0;
let _vAxisLeft = 0;
const PERIOD_BAR_W = 6;
const PERIOD_GAP = 2;

function _extractYear(str) {
    const m = (str || '').match(/(\d{4})/);
    return m ? parseInt(m[1]) : null;
}

function _calcPeriodSlots() {
    const vp = (PERIODS || []).filter(p => {
        if (p.visible === false) return false;
        const s = parseDate(p.date_start || p.date_start_text);
        const e = parseDate(p.date_end || p.date_end_text);
        return s && e;
    }).map(p => ({
        id: p.id, start: parseDate(p.date_start || p.date_start_text),
        end: parseDate(p.date_end || p.date_end_text),
        color: p.color, name: p.name, slot: 0,
    })).sort((a,b) => a.start - b.start);

    vp.forEach(p => {
        let slot = 0;
        while (vp.some(q => q.slot === slot && q !== p && q.start < p.end && q.end > p.start)) slot++;
        p.slot = slot;
    });
    return vp;
}

function _renderVertical() {
    eventsContainer.innerHTML = '';
    connectorsContainer.innerHTML = '';
    periodLinesContainer.innerHTML = '';

    const sorted = [...EVENTS].filter(e => e.visible !== false).sort((a,b) => {
        const da = parseDate(a.date_start || a.date_text);
        const db = parseDate(b.date_start || b.date_text);
        return (da||0) - (db||0);
    });

    const years = sorted.map(e => _extractYear(e.date_start || e.date_text)).filter(y => y !== null);
    _vMinYear = years.length ? Math.min(...years) : 0;
    _vMaxYear = years.length ? Math.max(...years) : 0;

    // Calculate period slots → dynamic padding
    const periodSlots = _calcPeriodSlots();
    const maxSlot = periodSlots.length ? Math.max(...periodSlots.map(p => p.slot)) + 1 : 0;
    const periodAreaW = maxSlot * (PERIOD_BAR_W + PERIOD_GAP);
    const periodBaseOffset = 12; // breathing room from left edge
    const axisLeft = periodBaseOffset + periodAreaW + 14;
    const padLeft = axisLeft + 16; // axis(3px) + gap to dot
    _vAxisLeft = axisLeft;

    // Apply dynamic padding-left on canvas so everything flows naturally
    canvas.style.paddingLeft = padLeft + 'px';
    canvas.style.width = 'auto';

    // Position axis
    const axis = canvas.querySelector('.tl-axis');
    if (axis) axis.style.left = axisLeft + 'px';

    let lastYear = null;

    sorted.forEach(ev => {
        const color = ev.color || CATEGORY_COLORS[ev.category] || '#d4af37';
        const icon = CATEGORY_ICONS[ev.category] || 'event';
        const dateStr = ev.date_start || ev.date_text || '';
        const year = _extractYear(dateStr);

        if (year !== null && year !== lastYear) {
            const ym = document.createElement('div');
            ym.className = 'tl-year-marker';
            ym.dataset.year = year;
            ym.innerHTML = '<div class="tl-year-tick"></div><span class="tl-year-text">'+year+'</span>';
            eventsContainer.appendChild(ym);
            lastYear = year;
        }

        const imgHtml = ev.image_data
            ? '<img src="data:image/jpeg;base64,'+ev.image_data+'" alt="" style="width:100%;height:80px;object-fit:cover;border-radius:0.5rem 0.5rem 0 0;">'
            : (ev.image_url ? '<img src="'+esc(ev.image_url)+'" alt="" style="width:100%;height:80px;object-fit:cover;border-radius:0.5rem 0.5rem 0 0;">' : '');

        const wrapper = document.createElement('div');
        wrapper.className = 'tl-event-wrapper';
        wrapper.dataset.year = year || '';
        wrapper.dataset.evid = ev.id;
        wrapper.innerHTML =
            '<div>'+
                '<div class="tl-event-dot" style="background:'+color+'!important;border-color:'+color+'!important;box-shadow:0 0 8px '+color+'40;">'+
                    '<div class="tl-dot-ring'+(selectedEventId===ev.id?' active':'')+'" style="border-color:'+color+';"></div>'+
                '</div>'+
                '<div class="tl-event-card'+(selectedEventId===ev.id?' selected':'')+'" data-id="'+ev.id+'">'+
                    imgHtml+
                    '<div class="card-body">'+
                        '<div style="display:flex;align-items:center;gap:0.3rem;">'+
                            '<span class="material-symbols-outlined" style="font-size:0.75rem;color:'+color+';">'+icon+'</span>'+
                            '<span class="card-title">'+esc(ev.title)+'</span>'+
                        '</div>'+
                        '<div class="card-date" style="color:'+color+';">'+esc(ev.date_text || ev.date_start || '')+'</div>'+
                    '</div>'+
                '</div>'+
            '</div>';

        wrapper.querySelector('.tl-event-card').addEventListener('click', () => TL.selectEvent(ev.id));
        eventsContainer.appendChild(wrapper);
    });

    requestAnimationFrame(() => {
        _renderVerticalPeriods(periodSlots);
        _renderSelectionConnector();
        _updateVerticalBar();
    });
}

function _renderVerticalPeriods(periodSlots) {
    periodLinesContainer.innerHTML = '';
    periodLinesContainer.style.width = (_vAxisLeft + 3) + 'px';

    periodSlots.forEach(p => {
        const wrappers = eventsContainer.querySelectorAll('.tl-event-wrapper[data-evid]');
        let firstEl = null, lastEl = null;

        wrappers.forEach(w => {
            const evId = parseInt(w.dataset.evid);
            const ev = EVENTS.find(e => e.id === evId);
            if (!ev) return;
            const evDate = parseDate(ev.date_start || ev.date_text);
            if (evDate >= p.start && evDate <= p.end) {
                if (!firstEl) firstEl = w;
                lastEl = w;
            }
        });
        if (!firstEl || !lastEl) return;

        const cOff = canvas.getBoundingClientRect().top;
        const fOff = firstEl.getBoundingClientRect().top;
        const lOff = lastEl.getBoundingClientRect();
        const top = fOff - cOff;
        const bottom = lOff.top + lOff.height - cOff;
        const h = bottom - top;
        const barLeft = 12 + p.slot * (PERIOD_BAR_W + PERIOD_GAP);

        // Colored bar
        const bar = document.createElement('div');
        bar.className = 'tl-vperiod-bar';
        bar.style.cssText = 'left:'+barLeft+'px;top:'+top+'px;height:'+h+'px;background:'+p.color+';';
        bar.title = p.name;
        periodLinesContainer.appendChild(bar);

        // Rotated label with dark bg (creates "break" in bar)
        const label = document.createElement('div');
        label.className = 'tl-vperiod-label';
        const labelTop = top + h * 0.15; // place near top of bar
        label.style.cssText = 'left:'+(barLeft-1)+'px;top:'+labelTop+'px;color:'+p.color+';';
        label.textContent = p.name;
        periodLinesContainer.appendChild(label);
    });
}

function _renderSelectionConnector() {
    canvas.querySelectorAll('.tl-hconnector').forEach(el => el.remove());
    if (!selectedEventId) return;

    const wrapper = eventsContainer.querySelector('.tl-event-wrapper[data-evid="'+selectedEventId+'"]');
    if (!wrapper) return;
    const dot = wrapper.querySelector('.tl-event-dot');
    if (!dot) return;

    const ev = EVENTS.find(e => e.id === selectedEventId);
    const color = ev ? (ev.color || CATEGORY_COLORS[ev.category] || '#d4af37') : '#d4af37';

    const cRect = canvas.getBoundingClientRect();
    const dRect = dot.getBoundingClientRect();
    const dotCenterY = dRect.top + dRect.height/2 - cRect.top;
    const dotLeftX = dRect.left - cRect.left;

    const conn = document.createElement('div');
    conn.className = 'tl-hconnector';
    conn.style.cssText = 'left:0;top:'+dotCenterY+'px;width:'+dotLeftX+'px;background:'+color+';';
    canvas.appendChild(conn);
}

function _updateVerticalBar() {
    const totalLabel = document.getElementById('tl-vbar-total-range');
    if (totalLabel && _vMinYear && _vMaxYear) {
        totalLabel.textContent = _vMinYear + ' \u2014 ' + _vMaxYear;
    }
    _updateVisibleRange();
}

function _updateVisibleRange() {
    const visibleLabel = document.getElementById('tl-vbar-visible');
    if (!visibleLabel || !viewport) return;

    const vpRect = viewport.getBoundingClientRect();
    const markers = eventsContainer.querySelectorAll('.tl-year-marker');
    let minV = null, maxV = null;

    markers.forEach(m => {
        const mRect = m.getBoundingClientRect();
        if (mRect.bottom >= vpRect.top && mRect.top <= vpRect.bottom) {
            const y = parseInt(m.dataset.year);
            if (!isNaN(y)) {
                if (minV === null || y < minV) minV = y;
                if (maxV === null || y > maxV) maxV = y;
            }
        }
    });

    visibleLabel.textContent = (minV !== null && maxV !== null)
        ? (minV === maxV ? String(minV) : minV + ' \u2014 ' + maxV)
        : '\u2014';
}
// ── Horizontal Mode ──
function _renderHorizontal() {
    eventsContainer.innerHTML = '';
    connectorsContainer.innerHTML = '';
    dateLabelsContainer.innerHTML = '';
    periodLinesContainer.innerHTML = '';
    if (periodLabelOverlay) periodLabelOverlay.innerHTML = '';

    const sorted = [...EVENTS].filter(e => e.visible !== false).sort((a,b) => {
        const da = parseDate(a.date_start || a.date_text);
        const db = parseDate(b.date_start || b.date_text);
        return da - db;
    });
    if (sorted.length === 0) return;

    const dates = sorted.map(e => parseDate(e.date_start || e.date_text)).filter(d => d !== 0);
    if (dates.length === 0) return;

    const minDate = Math.min(...dates);
    const maxDate = Math.max(...dates);
    const range = maxDate - minDate || 1;

    const viewportWidth = viewport.clientWidth || 800;
    const paddingX = 160;
    const verticalSlots = 10;
    const columnsNeeded = Math.ceil(sorted.length / verticalSlots);
    const naturalWidth = paddingX * 2 + columnsNeeded * 220;

    if (!initialZoomSet) {
        initialZoomSet = true;
        // Default: viewport shows ~1/4 of the total timeline (zoom = 4)
        // so the overview fill covers ~25% of the track — a comfortable spread.
        // If the natural layout needs more space, use that instead.
        const minZoom = 4;
        const nz = naturalWidth / viewportWidth;
        zoomLevel = Math.max(nz, minZoom);
    }

    const canvasWidth = Math.max(viewportWidth * zoomLevel, viewportWidth);
    canvas.style.width = canvasWidth + 'px';

    // ── Date labels ──
    renderDateLabels(minDate, maxDate, canvasWidth, paddingX, range);

    // ── Period lines ──
    renderPeriodLines(minDate, maxDate, canvasWidth, paddingX, range);

    // ── Card Placement (2D Bounding Box) ──
    const CARD_WIDTH = 190, GAP = 20, V_GAP = 6, CARD_HEIGHT = 130;
    const BASE_CONNECTOR = 25, TIER_OFFSET = 145, PERIOD_OFFSET = 80, DOT_H = 16, MAX_TIER = 4;

    const eventPositions = sorted.map(ev => ({
        event: ev,
        xPos: paddingX + ((parseDate(ev.date_start || ev.date_text) - minDate) / range) * (canvasWidth - paddingX * 2)
    }));

    const maxPeriodOffset = Math.max(0, ...Object.values(periodPositions).map(p => Math.abs(p.offsetFromAxis) || 0));
    const viewportHeight = viewport.clientHeight || 500;
    const worstHalf = maxPeriodOffset + BASE_CONNECTOR + MAX_TIER * TIER_OFFSET + DOT_H + CARD_HEIGHT + 40;
    const estCanvasH = Math.max(worstHalf * 2, viewportHeight);
    const axisY = estCanvasH / 2;

    function computeCardY(isTop, tier, pp) {
        const connH = BASE_CONNECTOR + tier * TIER_OFFSET;
        const anchorY = pp ? axisY + pp.offsetFromAxis : axisY;
        return isTop ? anchorY - connH - DOT_H - CARD_HEIGHT : anchorY + connH + DOT_H;
    }

    function boxesOverlap(a, b) {
        return !(a.x + a.w + GAP < b.x || b.x + b.w + GAP < a.x || a.y + a.h + V_GAP < b.y || b.y + b.h + V_GAP < a.y);
    }

    const assignments = [];
    const placedBoxes = [];
    let placedCount = 0;

    for (const {event, xPos} of eventPositions) {
        const pp = event.period_id ? periodPositions[event.period_id] : null;
        const posPref = event.position_preference || 'auto';
        let bestIsTop = true, bestTier = 0, found = false;
        const tryTopFirst = placedCount % 2 === 0;

        for (let tier = 0; tier <= MAX_TIER && !found; tier++) {
            const sides = posPref === 'top' ? [true] : posPref === 'bottom' ? [false] : tryTopFirst ? [true,false] : [false,true];
            for (const isTop of sides) {
                const cy = computeCardY(isTop, tier, pp);
                const box = {x: xPos, y: cy, w: CARD_WIDTH, h: CARD_HEIGHT};
                if (!placedBoxes.some(pb => boxesOverlap(box, pb))) {
                    bestIsTop = isTop; bestTier = tier; found = true; break;
                }
            }
        }
        if (!found) {
            bestTier = MAX_TIER;
            if (posPref === 'top') bestIsTop = true;
            else if (posPref === 'bottom') bestIsTop = false;
            else {
                const tB = {x:xPos, y:computeCardY(true,MAX_TIER,pp), w:CARD_WIDTH, h:CARD_HEIGHT};
                const bB = {x:xPos, y:computeCardY(false,MAX_TIER,pp), w:CARD_WIDTH, h:CARD_HEIGHT};
                bestIsTop = placedBoxes.filter(pb=>boxesOverlap(tB,pb)).length <= placedBoxes.filter(pb=>boxesOverlap(bB,pb)).length;
            }
        }
        placedCount++;
        const cy = computeCardY(bestIsTop, bestTier, pp);
        placedBoxes.push({x:xPos, y:cy, w:CARD_WIDTH, h:CARD_HEIGHT});
        assignments.push({event, xPos, isTop:bestIsTop, tier:bestTier});
    }

    canvas.style.height = estCanvasH + 'px';

    // ── Render cards ──
    for (const {event, xPos, isTop, tier} of assignments) {
        const pp = event.period_id ? periodPositions[event.period_id] : null;
        const connH = BASE_CONNECTOR + tier * TIER_OFFSET;
        const color = event.color || CATEGORY_COLORS[event.category] || '#d4af37';
        const icon = CATEGORY_ICONS[event.category] || 'event';
        const isSel = selectedEventId === event.id;

        // Image (no zoom on timeline card — zoom available in detail panel)
        let imgHtml = '';
        let imgSrc = '';
        if (event.image_data) imgSrc = 'data:image/jpeg;base64,' + event.image_data;
        else if (event.image_url) imgSrc = event.image_url;
        if (imgSrc) {
            imgHtml = '<img src="'+esc(imgSrc)+'" alt="" onerror="this.style.display=\'none\'"/>';
        }

        // Period badge
        let periodBadge = '';
        if (event.period_id) {
            const per = PERIODS.find(p => p.id === event.period_id);
            if (per) {
                const pc = per.color || '#d4af37';
                periodBadge = '<span class="card-badge" style="background:'+pc+'20;color:'+pc+';border:1px solid '+pc+'40;">'+esc(per.name)+'</span>';
            }
        }

        const cardHtml = '<div class="tl-event-card'+(isSel?' selected':'')+'" data-id="'+event.id+'" style="'+(isSel?'border-color:'+color+';':'')+'" onclick="TL.selectEvent('+event.id+')">' +
            imgHtml +
            '<div class="card-body">' +
            '<div style="display:flex;align-items:flex-start;gap:4px;margin-bottom:2px;">' +
            '<span class="material-symbols-outlined" style="font-size:0.8rem;color:'+color+';flex-shrink:0;margin-top:1px;">'+icon+'</span>' +
            '<span class="card-title serif-title">'+esc(event.title)+'</span></div>' +
            '<div class="card-date" style="color:'+color+';">'+esc(event.date_text)+'</div>' +
            '<div style="margin-top:4px;">' +
            '<span class="card-badge" style="background:'+color+'15;color:'+color+';">'+(CATEGORY_LABELS[event.category]||event.category)+'</span>' +
            periodBadge +
            '</div></div></div>';

        const ringHtml = isSel ? '<div class="tl-dot-ring active" style="border-color:'+color+';"></div>' : '<div class="tl-dot-ring" style="border-color:'+color+';"></div>';
        const dotHtml = '<div class="tl-event-dot" style="background:'+color+';border-color:'+color+';box-shadow:0 0 8px '+color+'40;" title="'+esc(event.title)+'" onclick="TL.selectEvent('+event.id+')">'+ringHtml+'</div>';
        const spacerHtml = '<div class="tl-spacer" style="height:'+connH+'px;"></div>';

        // Wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'tl-event-wrapper' + (isSel ? ' selected' : '');
        wrapper.style.left = xPos + 'px';
        wrapper.dataset.eventId = event.id;

        const inner = document.createElement('div');
        inner.style.cssText = 'display:flex;flex-direction:column;align-items:center;transform:translateX(-50%);';
        inner.innerHTML = isTop ? cardHtml + spacerHtml + dotHtml : dotHtml + spacerHtml + cardHtml;
        wrapper.appendChild(inner);

        if (isTop) {
            wrapper.style.bottom = pp ? 'calc(50% - '+pp.offsetFromAxis+'px)' : '50%';
        } else {
            wrapper.style.top = pp ? 'calc(50% + '+pp.offsetFromAxis+'px)' : '50%';
        }
        eventsContainer.appendChild(wrapper);

        // Connector (behind)
        const conn = document.createElement('div');
        conn.className = 'tl-connector';
        conn.style.left = xPos + 'px';
        conn.style.background = color + '40';
        conn.style.height = (connH + 16) + 'px';
        conn.style.transform = 'translateX(-50%)';
        if (isTop) {
            conn.style.bottom = pp ? 'calc(50% - '+pp.offsetFromAxis+'px)' : '50%';
        } else {
            conn.style.top = pp ? 'calc(50% + '+pp.offsetFromAxis+'px)' : '50%';
        }
        connectorsContainer.appendChild(conn);
    }

    updateOverviewBar();

    // Center scroll on first render
    if (!verticalScrollSet) {
        verticalScrollSet = true;
        const ch = canvas.clientHeight;
        const vh = viewport.clientHeight;
        if (ch > vh) viewport.scrollTop = (ch - vh) / 2;
    }
}

// ── Date Labels ──
function renderDateLabels(minDate, maxDate, canvasWidth, paddingX, range) {
    const minYear = new Date(minDate).getFullYear();
    const maxYear = new Date(maxDate).getFullYear();
    const yearSpan = maxYear - minYear;
    let step = 1;
    if (yearSpan > 200) step = 50;
    else if (yearSpan > 100) step = 25;
    else if (yearSpan > 50) step = 10;
    else if (yearSpan > 20) step = 5;
    const startYear = Math.floor(minYear / step) * step;

    for (let y = startYear; y <= maxYear + step; y += step) {
        const dv = new Date(y, 0, 1).getTime();
        if (dv < minDate - range * 0.05 || dv > maxDate + range * 0.05) continue;
        const x = paddingX + ((dv - minDate) / range) * (canvasWidth - paddingX * 2);
        const el = document.createElement('div');
        el.className = 'tl-date-label';
        el.style.left = x + 'px';
        el.innerHTML = '<div class="tick"></div><span>' + y + '</span>';
        dateLabelsContainer.appendChild(el);
    }
}

// ── Period Lines ──
function renderPeriodLines(minDate, maxDate, canvasWidth, paddingX, range) {
    const PERIOD_OFFSET = 80;
    const visible = PERIODS.filter(p => p.visible !== false);
    if (visible.length === 0) return;

    // Assign tiers respecting manual side preference (matches app logic)
    let aboveTier = 0, belowTier = 0, autoIdx = 0;

    visible.forEach((period) => {
        let isAbove;
        if (period.side === 'above') { isAbove = true; }
        else if (period.side === 'below') { isAbove = false; }
        else { isAbove = autoIdx % 2 === 0; autoIdx++; }
        const tier = isAbove ? aboveTier++ : belowTier++;
        const offsetPx = (tier + 1) * PERIOD_OFFSET;

        const startDate = parseDate(period.date_start || period.date_start_text);
        const endDate = parseDate(period.date_end || period.date_end_text);
        if (startDate === 0 && endDate === 0) return;
        const sDate = startDate || minDate;
        const eDate = endDate || maxDate;
        const xStart = paddingX + ((sDate - minDate) / range) * (canvasWidth - paddingX * 2);
        const xEnd = paddingX + ((eDate - minDate) / range) * (canvasWidth - paddingX * 2);
        const pColor = period.color || '#d4af37';
        const offsetFromAxis = isAbove ? -offsetPx : offsetPx;

        periodPositions[period.id] = {offsetFromAxis, isAbove, tier, xStart, xEnd, color: pColor};

        // Line (clickable to show period detail)
        const line = document.createElement('div');
        line.className = 'tl-period-line';
        line.style.cssText = 'left:'+xStart+'px;width:'+Math.max(xEnd-xStart,2)+'px;background:'+pColor+';top:calc(50% + '+offsetFromAxis+'px);';
        line.innerHTML = '<div class="tl-period-cap" style="left:0;background:'+pColor+';"></div><div class="tl-period-cap" style="right:0;background:'+pColor+';"></div>';
        line.addEventListener('click', () => TL.selectPeriod(period.id));
        periodLinesContainer.appendChild(line);

        // Label position based on title_position (matches app logic)
        const titlePos = period.title_position || 'start';
        const lineWidth = Math.max(xEnd - xStart, 2);
        const label = document.createElement('div');
        label.className = 'tl-period-name';
        label.style.color = pColor;

        if (titlePos === 'center') {
            label.style.left = (xStart + lineWidth / 2) + 'px';
            label.style.transform = 'translateX(-50%)';
        } else if (titlePos === 'end') {
            label.style.left = (xEnd - 8) + 'px';
            label.style.textAlign = 'right';
            label.style.transform = 'translateX(-100%)';
        } else if (titlePos === 'timeline_start') {
            label.style.left = (paddingX + 8) + 'px';
        } else {
            label.style.left = (xStart + 8) + 'px';
        }

        label.style.top = isAbove ? 'calc(50% + '+offsetFromAxis+'px - 16px)' : 'calc(50% + '+offsetFromAxis+'px + 6px)';
        label.textContent = period.name;
        label.addEventListener('click', () => TL.selectPeriod(period.id));
        if (periodLabelOverlay) periodLabelOverlay.appendChild(label);
        else periodLinesContainer.appendChild(label);
    });
}

// ══════════════════════════════
// SIDEBAR
// ══════════════════════════════
let sbSearch = '', sbGroup = 'none', sbSort = 'date';
let sbCollapsed = {}, sbHidden = {};

function sbToggleCollapse(key) { sbCollapsed[key] = !sbCollapsed[key]; renderSidebar(); }

function sbToggleVisibility(key, eventIds) {
    const willHide = !sbHidden[key];
    sbHidden[key] = willHide;
    eventIds.forEach(id => {
        const ev = EVENTS.find(e => e.id === id);
        if (ev) ev.visible = !willHide;
    });
    renderTimeline();
    renderSidebar();
}

function renderSidebar() {
    const list = document.getElementById('sb-events-list');
    if (!list) return;

    let evs = [...EVENTS];

    // Filter
    if (sbSearch) {
        const q = sbSearch.toLowerCase();
        evs = evs.filter(e => (e.title||'').toLowerCase().includes(q) || (e.description||'').toLowerCase().includes(q) || (e.date_text||'').toLowerCase().includes(q));
    }

    // Sort
    evs.sort((a,b) => {
        if (sbSort === 'date') return parseDate(a.date_start||a.date_text) - parseDate(b.date_start||b.date_text);
        if (sbSort === 'title') return (a.title||'').localeCompare(b.title||'');
        if (sbSort === 'category') return (a.category||'').localeCompare(b.category||'');
        return 0;
    });

    list.innerHTML = '';

    if (evs.length === 0) {
        list.innerHTML = '<div style="text-align:center;padding:2rem;color:#6e6863;font-size:0.7rem;">' + (sbSearch ? 'Sin resultados.' : 'Sin eventos.') + '</div>';
        renderPeriodsSection();
        return;
    }

    // Group
    if (sbGroup === 'none') {
        evs.forEach(e => list.appendChild(createSidebarItem(e)));
    } else {
        const groups = {};
        evs.forEach(e => {
            let key;
            if (sbGroup === 'category') {
                key = e.category || 'evento';
            } else if (sbGroup === 'period') {
                if (e.period_id) {
                    const p = PERIODS.find(pp => pp.id === e.period_id);
                    key = p ? '__period__' + p.id + '__' + p.name : 'Sin periodo';
                } else {
                    key = 'Sin periodo';
                }
            } else {
                key = 'Todos';
            }
            if (!groups[key]) groups[key] = [];
            groups[key].push(e);
        });

        for (const [gKey, gEvents] of Object.entries(groups)) {
            const periodMatch = gKey.match(/^__period__(\d+)__(.+)$/);
            let icon, label, periodColor;

            if (sbGroup === 'period' && periodMatch) {
                const pId = parseInt(periodMatch[1]);
                const p = PERIODS.find(pp => pp.id === pId);
                periodColor = p ? (p.color || '#d4af37') : '#d4af37';
                icon = 'stacked_line_chart';
                label = periodMatch[2];
            } else if (sbGroup === 'category') {
                icon = CATEGORY_ICONS[gKey] || 'event';
                label = CATEGORY_LABELS[gKey] || gKey;
                periodColor = null;
            } else {
                icon = sbGroup === 'period' ? 'timeline' : 'calendar_month';
                label = gKey;
                periodColor = null;
            }

            const isCollapsed = !!sbCollapsed[gKey];
            const isHidden = !!sbHidden[gKey];
            const accentColor = periodColor || '#d4af37';
            const eventIds = gEvents.map(e => e.id);

            // Group header
            const gh = document.createElement('div');
            gh.className = 'tl-group-header';
            gh.innerHTML =
                '<button class="gh-btn" data-action="collapse" title="' + (isCollapsed ? 'Expandir' : 'Contraer') + '"><span class="material-symbols-outlined gh-arrow' + (isCollapsed ? ' collapsed' : '') + '">expand_more</span></button>' +
                (periodColor ? '<div style="width:7px;height:7px;border-radius:2px;flex-shrink:0;background:' + periodColor + ';"></div>' : '') +
                '<span class="material-symbols-outlined" style="color:' + accentColor + ';">' + icon + '</span>' +
                '<span class="gh-label" style="color:' + (periodColor || '#8a754c') + ';" data-action="collapse">' + esc(label) + '</span>' +
                '<span class="gh-count">' + gEvents.length + '</span>' +
                '<button class="gh-btn" data-action="visibility" title="' + (isHidden ? 'Mostrar' : 'Ocultar') + '"><span class="material-symbols-outlined">' + (isHidden ? 'visibility_off' : 'visibility') + '</span></button>';

            // Attach handlers
            gh.querySelectorAll('[data-action="collapse"]').forEach(el => {
                el.addEventListener('click', (e) => { e.stopPropagation(); sbToggleCollapse(gKey); });
            });
            const visBtn = gh.querySelector('[data-action="visibility"]');
            if (visBtn) visBtn.addEventListener('click', (e) => { e.stopPropagation(); sbToggleVisibility(gKey, eventIds); });

            list.appendChild(gh);

            // Items (only if not collapsed)
            if (!isCollapsed) {
                const itemsDiv = document.createElement('div');
                itemsDiv.className = 'tl-group-items' + (isHidden ? ' hidden-group' : '');
                gEvents.forEach(e => itemsDiv.appendChild(createSidebarItem(e)));
                list.appendChild(itemsDiv);
            }
        }
    }

    // Periods section
    renderPeriodsSection();
}

function createSidebarItem(ev) {
    const item = document.createElement('div');
    const color = ev.color || CATEGORY_COLORS[ev.category] || '#d4af37';
    const isSel = selectedEventId === ev.id;
    item.className = 'tl-ev-item' + (isSel ? ' active' : '');
    item.dataset.eventId = ev.id;
    item.innerHTML = '<div class="dot" style="background:'+color+';"></div><div style="flex:1;min-width:0;"><div class="ev-title">'+esc(ev.title)+'</div><div class="ev-date" style="color:'+color+';">'+esc(ev.date_text)+'</div></div>';
    item.addEventListener('click', () => TL.selectEvent(ev.id));
    return item;
}

function renderPeriodsSection() {
    const section = document.getElementById('sb-periods-section');
    if (!section) return;
    const visible = PERIODS.filter(p => p.visible !== false);
    if (visible.length === 0) { section.innerHTML = ''; return; }
    section.innerHTML = '<h4>Periodos</h4>';
    visible.forEach(p => {
        const c = p.color || '#d4af37';
        const dateRange = (p.date_start_text || p.date_start || '') + ' — ' + (p.date_end_text || p.date_end || '');
        const item = document.createElement('div');
        item.className = 'tl-period-item';
        item.innerHTML = '<div class="bar" style="background:'+c+';"></div><div class="pname" style="color:'+c+';">'+esc(p.name)+'</div><div class="pdate">'+esc(dateRange)+'</div>';
        item.addEventListener('click', () => TL.selectPeriod(p.id));
        section.appendChild(item);
    });
}

// ══════════════════════════════
// DETAIL PANEL
// ══════════════════════════════
function showDetail(eventId) {
    const ev = EVENTS.find(e => e.id === eventId);
    if (!ev) return;
    const color = ev.color || CATEGORY_COLORS[ev.category] || '#d4af37';
    const icon = CATEGORY_ICONS[ev.category] || 'event';
    let imgHtml = '';
    let detailImgSrc = '';
    if (ev.image_data) detailImgSrc = 'data:image/jpeg;base64,'+ev.image_data;
    else if (ev.image_url) detailImgSrc = ev.image_url;
    if (detailImgSrc) {
        imgHtml = '<div style="position:relative;cursor:pointer;margin-bottom:0.75rem;" onclick="TL.openLightbox(\''+detailImgSrc.replace(/'/g,"\\'")+'\')">' +
            '<img src="'+esc(detailImgSrc)+'" alt="" style="width:100%;border-radius:0.5rem;" onerror="this.parentElement.style.display=\'none\'"/>' +
            '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.2);opacity:0;transition:opacity 0.2s;border-radius:0.5rem;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0">' +
            '<span class="material-symbols-outlined" style="background:rgba(26,22,20,0.8);border-radius:50%;padding:0.3rem;color:#d4af37;">zoom_in</span></div></div>';
    }

    let periodHtml = '';
    if (ev.period_id) {
        const per = PERIODS.find(p => p.id === ev.period_id);
        if (per) {
            const pc = per.color || '#d4af37';
            periodHtml = '<span class="d-badge" style="background:'+pc+'20;color:'+pc+';border:1px solid '+pc+'40;">'+esc(per.name)+'</span>';
        }
    }

    detailBody.innerHTML =
        imgHtml +
        '<div class="d-title serif-title">'+esc(ev.title)+'</div>' +
        '<div class="d-date" style="color:'+color+';">'+esc(ev.date_text)+'</div>' +
        (ev.description ? '<div class="d-desc">'+esc(ev.description)+'</div>' : '') +
        '<div>' +
        '<span class="d-badge" style="background:'+color+'15;color:'+color+';"><span class="material-symbols-outlined" style="font-size:0.7rem;vertical-align:middle;margin-right:2px;">'+icon+'</span>'+(CATEGORY_LABELS[ev.category]||ev.category)+'</span>' +
        periodHtml +
        '</div>' +
        '<button class="tl-detail-back" onclick="TL.backToTimeline();"><span class="material-symbols-outlined" style="font-size:0.9rem;vertical-align:middle;margin-right:0.3rem;">arrow_back</span>Regresar a la línea de tiempo</button>';

    detailPanel.classList.add('open');
}

function showPeriodDetail(periodId) {
    const p = PERIODS.find(pp => pp.id === periodId);
    if (!p) return;
    const color = p.color || '#d4af37';
    const dateStart = p.date_start_text || p.date_start || '';
    const dateEnd = p.date_end_text || p.date_end || '';
    const dateRange = dateStart + (dateEnd ? ' — ' + dateEnd : '');

    // Count events in this period
    const periodEvents = EVENTS.filter(e => e.period_id === periodId);

    let eventsListHtml = '';
    if (periodEvents.length > 0) {
        eventsListHtml = '<div style="margin-top:0.75rem;border-top:1px solid rgba(138,117,76,0.2);padding-top:0.75rem;">' +
            '<div style="font-size:0.6rem;font-weight:700;color:#8a754c;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem;">Eventos en este periodo (' + periodEvents.length + ')</div>';
        periodEvents.forEach(ev => {
            const ec = ev.color || CATEGORY_COLORS[ev.category] || '#d4af37';
            eventsListHtml += '<div style="display:flex;align-items:center;gap:0.4rem;padding:0.3rem 0;cursor:pointer;font-size:0.7rem;" onclick="TL.selectEvent(' + ev.id + ')">' +
                '<div style="width:7px;height:7px;border-radius:50%;background:' + ec + ';flex-shrink:0;"></div>' +
                '<div style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#e8e6e3;">' + esc(ev.title) + '</div>' +
                '<div style="font-size:0.5rem;color:#6e6863;white-space:nowrap;">' + esc(ev.date_text) + '</div></div>';
        });
        eventsListHtml += '</div>';
    }

    detailBody.innerHTML =
        '<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;">' +
        '<div style="width:16px;height:4px;border-radius:2px;background:' + color + ';flex-shrink:0;"></div>' +
        '<span class="material-symbols-outlined" style="font-size:1rem;color:' + color + ';">date_range</span></div>' +
        '<div class="d-title serif-title" style="color:' + color + ';">' + esc(p.name) + '</div>' +
        '<div class="d-date" style="color:' + color + ';">' + esc(dateRange) + '</div>' +
        (p.description ? '<div class="d-desc">' + esc(p.description) + '</div>' : '<div class="d-desc" style="font-style:italic;color:#6e6863;">Sin descripcion.</div>') +
        '<div><span class="d-badge" style="background:' + color + '15;color:' + color + ';">Periodo</span>' +
        '<span class="d-badge" style="background:rgba(138,117,76,0.1);color:#8a754c;">' + periodEvents.length + ' evento' + (periodEvents.length !== 1 ? 's' : '') + '</span></div>' +
        eventsListHtml +
        '<button class="tl-detail-back" onclick="TL.backToTimeline();"><span class="material-symbols-outlined" style="font-size:0.9rem;vertical-align:middle;margin-right:0.3rem;">arrow_back</span>Regresar a la línea de tiempo</button>';

    detailPanel.classList.add('open');
}

function closeDetail() {
    detailPanel.classList.remove('open');
}

// ══════════════════════════════
// DRAG SCROLL
// ══════════════════════════════
let isDragging = false, dragStartX = 0, dragStartY = 0, dragScrollLeft = 0, dragScrollTop = 0;

viewport.addEventListener('mousedown', e => {
    if (e.target.closest('.tl-event-card') || e.target.closest('.tl-event-dot')) return;
    isDragging = true;
    viewport.classList.add('grabbing');
    dragStartX = e.clientX; dragStartY = e.clientY;
    dragScrollLeft = viewport.scrollLeft; dragScrollTop = viewport.scrollTop;
    e.preventDefault();
});
document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    viewport.scrollLeft = dragScrollLeft - (e.clientX - dragStartX);
    viewport.scrollTop = dragScrollTop - (e.clientY - dragStartY);
});
document.addEventListener('mouseup', () => {
    if (isDragging) { isDragging = false; viewport.classList.remove('grabbing'); }
});

// ══════════════════════════════
// ZOOM (Ctrl+Scroll)
// ══════════════════════════════
viewport.addEventListener('wheel', e => {
    if (!e.ctrlKey && !e.metaKey) return;
    e.preventDefault();
    const oldZoom = zoomLevel;
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    zoomLevel = Math.max(1, Math.min(20, zoomLevel * delta));
    if (zoomLevel === oldZoom) return;

    // Keep mouse position stable
    const rect = viewport.getBoundingClientRect();
    const mouseX = e.clientX - rect.left + viewport.scrollLeft;
    const ratio = zoomLevel / oldZoom;
    renderTimeline();
    viewport.scrollLeft = mouseX * ratio - (e.clientX - rect.left);
}, {passive: false});

// ══════════════════════════════
// OVERVIEW BAR
// ══════════════════════════════
// Cached date range for overview label updates
let _ovMinDate = 0, _ovMaxDate = 0;

function formatDateMs(ms) {
    if (!ms) return '';
    return '' + new Date(ms).getFullYear();
}

function updateRangeLabel(rangeStart, rangeEnd) {
    const label = document.getElementById('ov-range-label');
    if (!label || !_ovMinDate || !_ovMaxDate) return;
    const span = _ovMaxDate - _ovMinDate;
    if (rangeStart <= 0.01 && rangeEnd >= 0.99) {
        label.textContent = formatDateMs(_ovMinDate) + ' — ' + formatDateMs(_ovMaxDate);
    } else {
        const startMs = _ovMinDate + rangeStart * span;
        const endMs = _ovMinDate + rangeEnd * span;
        label.textContent = formatDateMs(startMs) + ' — ' + formatDateMs(endMs);
    }
}

function updateOverviewBar() {
    const track = document.getElementById('ov-track');
    const dotsEl = document.getElementById('ov-dots');
    if (!track || !dotsEl) return;

    // Render dots and period spans
    dotsEl.innerHTML = '';
    const visibleEvents = EVENTS.filter(e => e.visible !== false);
    const dates = visibleEvents.map(e => parseDate(e.date_start || e.date_text)).filter(d => d !== 0);
    if (dates.length > 0) {
        const mn = Math.min(...dates), mx = Math.max(...dates), rng = mx - mn || 1;
        _ovMinDate = mn;
        _ovMaxDate = mx;

        // Period color spans
        PERIODS.filter(p => p.visible !== false).forEach(p => {
            const ps = parseDate(p.date_start || p.date_start_text);
            const pe = parseDate(p.date_end || p.date_end_text);
            if (!ps && !pe) return;
            const s0 = Math.max(0, Math.min(100, ((ps || mn) - mn) / rng * 100));
            const s1 = Math.max(0, Math.min(100, ((pe || mx) - mn) / rng * 100));
            const span = document.createElement('div');
            span.className = 'tl-overview-period';
            span.style.left = s0 + '%';
            span.style.width = Math.max(s1 - s0, 0.5) + '%';
            span.style.background = p.color || '#d4af37';
            dotsEl.appendChild(span);
        });

        // Event dots
        visibleEvents.forEach(ev => {
            const d = parseDate(ev.date_start || ev.date_text);
            if (d === 0) return;
            const pct = (d - mn) / rng;
            const dot = document.createElement('div');
            dot.className = 'tl-overview-dot';
            dot.style.left = (pct * 100) + '%';
            dot.style.background = ev.color || CATEGORY_COLORS[ev.category] || '#d4af37';
            dotsEl.appendChild(dot);
        });
    }

    // Update range label
    const rangeLabel = document.getElementById('ov-range-label');
    if (rangeLabel && _ovMinDate && _ovMaxDate) {
        rangeLabel.textContent = formatDateMs(_ovMinDate) + ' — ' + formatDateMs(_ovMaxDate);
    }

    // Update event count
    const countEl = document.getElementById('ov-count');
    if (countEl) {
        const n = visibleEvents.length;
        countEl.textContent = n + ' evento' + (n !== 1 ? 's' : '');
    }

    if (!overviewDragging) syncOverviewFromScroll();
}

function syncOverviewFromScroll() {
    const fill = document.getElementById('ov-fill');
    const leftH = document.getElementById('ov-left');
    const rightH = document.getElementById('ov-right');
    const track = document.getElementById('ov-track');
    if (!fill || !leftH || !rightH || !track) return;

    const cw = canvas.scrollWidth || canvas.clientWidth;
    const vw = viewport.clientWidth;
    if (cw <= vw) {
        fill.style.left='0';fill.style.width='100%';
        leftH.style.left='0';rightH.style.left='100%';
        updateRangeLabel(0, 1);
        return;
    }

    const sl = viewport.scrollLeft;
    const leftPct = sl / cw * 100;
    const widthPct = vw / cw * 100;
    fill.style.left = leftPct + '%';
    fill.style.width = widthPct + '%';
    leftH.style.left = leftPct + '%';
    rightH.style.left = (leftPct + widthPct) + '%';
    updateRangeLabel(sl / cw, (sl + vw) / cw);
}

// Draggable handles + fill drag — performance-optimized (no renderTimeline during drag)
(function initOverviewDrag() {
    const track = document.getElementById('ov-track');
    const fill = document.getElementById('ov-fill');
    const leftH = document.getElementById('ov-left');
    const rightH = document.getElementById('ov-right');
    if (!track || !leftH || !rightH) return;

    let dragStartPct = 0;
    let pendingLeft = null, pendingWidth = null;

    function startDrag(handle) { return function(e) {
        e.preventDefault(); e.stopPropagation();
        overviewDragging = handle;
        if (handle === 'fill') {
            const rect = track.getBoundingClientRect();
            dragStartPct = (e.clientX - rect.left) / rect.width * 100;
            fill.style.cursor = 'grabbing';
        }
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', endDrag);
    };}

    function onMove(e) {
        if (!overviewDragging) return;
        const rect = track.getBoundingClientRect();
        const pct = Math.max(0, Math.min(100, (e.clientX - rect.left) / rect.width * 100));

        const curLeft = parseFloat(fill.style.left) || 0;
        const curWidth = parseFloat(fill.style.width) || 10;

        if (overviewDragging === 'left') {
            const right = curLeft + curWidth;
            const newLeft = Math.min(pct, right - 3);
            const newWidth = right - newLeft;
            // Only update CSS — don't renderTimeline during drag
            fill.style.left = newLeft + '%';
            fill.style.width = newWidth + '%';
            leftH.style.left = newLeft + '%';
            pendingLeft = newLeft;
            pendingWidth = newWidth;
            // Scroll using current canvas width (no re-render)
            const cw = canvas.scrollWidth || canvas.clientWidth;
            viewport.scrollLeft = (newLeft / 100) * cw;
        } else if (overviewDragging === 'right') {
            const newRight = Math.max(pct, curLeft + 3);
            const newWidth = newRight - curLeft;
            fill.style.width = newWidth + '%';
            rightH.style.left = newRight + '%';
            pendingLeft = curLeft;
            pendingWidth = newWidth;
            const cw = canvas.scrollWidth || canvas.clientWidth;
            viewport.scrollLeft = (curLeft / 100) * cw;
        } else if (overviewDragging === 'fill') {
            const delta = pct - dragStartPct;
            let newLeft = curLeft + delta;
            newLeft = Math.max(0, Math.min(100 - curWidth, newLeft));
            fill.style.left = newLeft + '%';
            leftH.style.left = newLeft + '%';
            rightH.style.left = (newLeft + curWidth) + '%';
            const cw = canvas.scrollWidth || canvas.clientWidth;
            viewport.scrollLeft = (newLeft / 100) * cw;
            dragStartPct = pct;
        }

        // Update range label during drag
        updateRangeLabel(parseFloat(fill.style.left) / 100, (parseFloat(fill.style.left) + parseFloat(fill.style.width)) / 100);
    }

    function endDrag() {
        const wasDragging = overviewDragging;
        overviewDragging = null;
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', endDrag);
        if (fill) fill.style.cursor = 'grab';

        // Apply zoom only on mouseup — this is what makes it fast
        if (wasDragging === 'left' || wasDragging === 'right') {
            if (pendingWidth !== null) {
                const newZoom = 100 / pendingWidth;
                zoomLevel = Math.max(1, Math.min(20, newZoom));
                renderTimeline();
                if (pendingLeft !== null) {
                    viewport.scrollLeft = (pendingLeft / 100) * (canvas.scrollWidth || canvas.clientWidth);
                }
            }
            pendingLeft = null;
            pendingWidth = null;
        }
    }

    leftH.addEventListener('mousedown', startDrag('left'));
    rightH.addEventListener('mousedown', startDrag('right'));
    if (fill) fill.style.cursor = 'grab';
    if (fill) fill.style.pointerEvents = 'auto';
    if (fill) fill.addEventListener('mousedown', startDrag('fill'));

    // Track click → scroll to position
    track.addEventListener('click', e => {
        if (e.target === leftH || e.target === rightH || e.target === fill) return;
        if (e.target.closest('.tl-overview-handle')) return;
        const rect = track.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        const cw = canvas.scrollWidth || canvas.clientWidth;
        const vw = viewport.clientWidth;
        viewport.scrollLeft = pct * cw - vw / 2;
    });
})();

// Sync overview on scroll
viewport.addEventListener('scroll', () => {
    if (overviewDragging) return;
    syncOverviewFromScroll();
});

// Fit All / Reset button
document.getElementById('btn-fit').addEventListener('click', () => {
    const n = EVENTS.filter(e => e.visible !== false).length;
    const vw = viewport.clientWidth || 800;
    const paddingX = 160;
    const verticalSlots = 10;
    const columnsNeeded = Math.ceil(n / verticalSlots);
    const naturalWidth = paddingX * 2 + columnsNeeded * 220;
    zoomLevel = Math.max(1, naturalWidth / vw);
    initialZoomSet = true;
    renderTimeline();
    viewport.scrollLeft = 0;
    const ch = canvas.clientHeight;
    const vh = viewport.clientHeight;
    if (ch > vh) viewport.scrollTop = (ch - vh) / 2;
});

// ══════════════════════════════
// SELECTION
// ══════════════════════════════
const TL = {
    openLightbox(src) {
        // Block lightbox on mobile/tablet — detail view already shows full image
        if (window.innerWidth <= 1024) return;
        const lb = document.getElementById('tl-lightbox');
        const img = document.getElementById('tl-lightbox-img');
        if (!lb || !img) return;
        img.src = src;
        lb.classList.add('open');
    },
    closeLightbox() {
        const lb = document.getElementById('tl-lightbox');
        if (lb) lb.classList.remove('open');
    },
    selectEvent(eventId) {
        selectedEventId = selectedEventId === eventId ? null : eventId;
        renderTimeline();
        renderSidebar();

        if (selectedEventId) {
            showDetail(selectedEventId);
            // Scroll card into view
            if (_currentMode === 'vertical') {
                const vWrapper = eventsContainer.querySelector('.tl-event-wrapper[data-evid="'+eventId+'"]');
                if (vWrapper) {
                    const wTop = vWrapper.offsetTop + eventsContainer.offsetTop;
                    const vh = viewport.clientHeight;
                    viewport.scrollTo({top: wTop - vh/3, behavior: 'smooth'});
                }
            } else {
                const wrapper = canvas.querySelector('[data-event-id="'+eventId+'"]');
                if (wrapper) {
                    const wLeft = wrapper.offsetLeft;
                    const vw = viewport.clientWidth;
                    viewport.scrollTo({left: wLeft - vw/2, behavior: 'smooth'});
                }
            }
            // Highlight sidebar item
            const sbItem = document.querySelector('.tl-ev-item[data-event-id="'+eventId+'"]');
            if (sbItem) sbItem.scrollIntoView({behavior:'smooth', block:'nearest'});
        } else {
            closeDetail();
        }
    },
    selectPeriod(periodId) {
        // Deselect any event
        selectedEventId = null;
        renderTimeline();
        renderSidebar();
        showPeriodDetail(periodId);
    },
    backToTimeline() {
        selectedEventId = null;
        closeDetail();
        renderTimeline();
        renderSidebar();
    }
};
window.TL = TL;

// ══════════════════════════════
// SIDEBAR EVENTS
// ══════════════════════════════
const sbSearchInput = document.getElementById('sb-search');
const sbGroupSelect = document.getElementById('sb-group');
const sbSortSelect = document.getElementById('sb-sort');
if (sbSearchInput) sbSearchInput.addEventListener('input', () => { sbSearch = sbSearchInput.value.trim(); renderSidebar(); });
if (sbGroupSelect) sbGroupSelect.addEventListener('change', () => { sbGroup = sbGroupSelect.value; sbCollapsed = {}; sbHidden = {}; renderSidebar(); });
if (sbSortSelect) sbSortSelect.addEventListener('change', () => { sbSort = sbSortSelect.value; renderSidebar(); });

// Close detail button
document.getElementById('btn-close-detail').addEventListener('click', () => {
    selectedEventId = null;
    closeDetail();
    renderTimeline();
    renderSidebar();
});

// ══════════════════════════════
// Sidebar toggle (arrow tab on edge)
// ══════════════════════════════
const btnToggleSidebar = document.getElementById('btn-toggle-sidebar');
const sidebarEl = document.getElementById('sidebar');
if (btnToggleSidebar && sidebarEl) {
    btnToggleSidebar.addEventListener('click', () => {
        const isCollapsing = !sidebarEl.classList.contains('collapsed');
        sidebarEl.classList.toggle('collapsed');
        btnToggleSidebar.classList.toggle('collapsed');
        // Re-render after transition to recalculate widths
        setTimeout(() => { renderTimeline(); }, 350);
    });
}

// ══════════════════════════════
// Layout toggle (horizontal ↔ vertical)
// ══════════════════════════════
const btnToggleLayout = document.getElementById('btn-toggle-layout');
if (btnToggleLayout) {
    // Set initial state based on mode
    if (FORCE_VERTICAL || _currentMode === 'vertical') {
        btnToggleLayout.classList.add('active');
        document.getElementById('toggle-layout-icon').textContent = 'view_timeline';
    }
    btnToggleLayout.addEventListener('click', () => {
        const currentlyVertical = _currentMode === 'vertical';
        _userToggledVertical = !currentlyVertical;
        btnToggleLayout.classList.toggle('active', _userToggledVertical);
        const icon = document.getElementById('toggle-layout-icon');
        if (icon) icon.textContent = _userToggledVertical ? 'view_timeline' : 'view_agenda';
        initialZoomSet = false;
        renderTimeline();
        renderSidebar();
    });
}

// ══════════════════════════════
// Keyboard shortcuts
// ══════════════════════════════
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        const lb = document.getElementById('tl-lightbox');
        if (lb && lb.classList.contains('open')) { TL.closeLightbox(); return; }
        if (selectedEventId) { selectedEventId = null; closeDetail(); renderTimeline(); renderSidebar(); }
    }
});

// ══════════════════════════════
// INIT
// ══════════════════════════════
// Start with sidebar collapsed so the timeline gets full width
if (sidebarEl) sidebarEl.classList.add('collapsed');
if (btnToggleSidebar) btnToggleSidebar.classList.add('collapsed');

renderTimeline();
renderSidebar();

// Vertical mode: scroll listener for bottom bar range (active when vertical)
viewport.addEventListener('scroll', () => {
    if (_currentMode === 'vertical') _updateVisibleRange();
});

const vbarReset = document.getElementById('tl-vbar-reset');
if (vbarReset) {
    vbarReset.addEventListener('click', () => {
        viewport.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Handle resize: switch modes if needed + update layout toggle button
{
    let _resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(_resizeTimer);
        _resizeTimer = setTimeout(() => {
            // Reset user toggle when entering mobile (always vertical there)
            if (window.innerWidth <= MOBILE_BREAKPOINT) {
                _userToggledVertical = null;
                if (btnToggleLayout) btnToggleLayout.classList.remove('active');
            }
            const shouldBeVertical = _isVerticalMode();
            const newMode = shouldBeVertical ? 'vertical' : 'horizontal';
            if (newMode !== _currentMode) {
                initialZoomSet = false;
                renderTimeline();
                renderSidebar();
                // Sync button state
                if (btnToggleLayout) {
                    btnToggleLayout.classList.toggle('active', newMode === 'vertical');
                    const icon = document.getElementById('toggle-layout-icon');
                    if (icon) icon.textContent = newMode === 'vertical' ? 'view_timeline' : 'view_agenda';
                }
            }
        }, 250);
    });
}

})();