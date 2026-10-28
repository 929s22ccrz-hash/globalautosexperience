// Generado por scripts/avisos/compilar.mjs (Global Autos Privé). No editar a mano.
import webpush from "web-push";
//#region src/config.js
const config = {
	brand: "Global Autos",
	brandUpper: "GLOBAL AUTOS",
	tagline: "Luxury Car Rentals",
	claim: "El lujo no se alquila. Se vive.",
	country: "Colombia",
	city: "Medellín",
	hq: "medellin",
	logo: {
		mark: "/brand/ga-mark.svg",
		wordmark: "/brand/ga-wordmark.svg",
		lockup: "/brand/ga-lockup.svg"
	},
	instagram: {
		handle: "@global__autos",
		url: "https://www.instagram.com/global__autos/"
	},
	tiktok: {
		handle: "@globalautos",
		url: "https://www.tiktok.com/@globalautos"
	},
	whatsapp: {
		number: "573042902883",
		display: "+57 304 290 2883",
		greeting: "Hola Global Autos, quiero información para reservar un vehículo."
	},
	site: "https://globalautosexperience.com",
	email: "globalautoscol@gmail.com",
	phone: "+57 304 290 2883",
	address: "Medellín, Antioquia, Colombia",
	hours: "Atención 24/7",
	legal: {
		company: "Global Autos AG",
		owner: "Alejandro Gutiérrez Giraldo",
		nit: "NIT 1.041.232.849-1",
		registration: "Matrícula mercantil 21-780506-02",
		chamber: "Cámara de Comercio de Medellín para Antioquia",
		since: 2023,
		rnt: "",
		noticeAddress: ""
	},
	stats: [
		{
			value: 2,
			prefix: "",
			suffix: "",
			label: "Años de experiencia"
		},
		{
			value: 18,
			prefix: "",
			suffix: "",
			label: "Vehículos en la flota"
		},
		{
			value: 24,
			prefix: "",
			suffix: "/7",
			label: "Atención personal"
		}
	],
	credits: {
		photos: {
			label: "Fotografías: Unsplash",
			url: "https://unsplash.com"
		},
		images: [
			{
				file: "/img/fleet/toyota-prado-tx.webp",
				title: "Toyota Land Cruiser Prado 4.0 VX-L 2015 (29124285232).jpg",
				author: "RL GNZLZ from Chile",
				license: "CC BY-SA 2.0",
				source: "Wikimedia Commons",
				url: "https://commons.wikimedia.org/wiki/File:Toyota_Land_Cruiser_Prado_4.0_VX-L_2015_(29124285232).jpg",
				edited: true
			},
			{
				file: "/img/fleet/toyota-prado-tx-blanca.webp",
				title: "2015 Toyota Land Cruiser Prado (KDJ150R MY14) GXL 5-door wagon (2015-06-03) 01.jpg",
				author: "OSX",
				license: "Dominio público",
				source: "Wikimedia Commons",
				url: "https://commons.wikimedia.org/wiki/File:2015_Toyota_Land_Cruiser_Prado_(KDJ150R_MY14)_GXL_5-door_wagon_(2015-06-03)_01.jpg",
				edited: true
			},
			{
				file: "/img/fleet/toyota-prado-tx-2.webp",
				title: "2015 Toyota Land Cruiser Prado (KDJ150R) GXL 5-door wagon (2016-07-07) 01.jpg",
				author: "EurovisionNim",
				license: "CC BY-SA 4.0",
				source: "Wikimedia Commons",
				url: "https://commons.wikimedia.org/wiki/File:2015_Toyota_Land_Cruiser_Prado_(KDJ150R)_GXL_5-door_wagon_(2016-07-07)_01.jpg",
				edited: true
			},
			{
				file: "/img/fleet/bmw-convertible.webp",
				title: "BMW 435i Cabriolet Luxury (F33) front.JPG",
				author: "Tokumeigakarinoaoshima",
				license: "CC0",
				source: "Wikimedia Commons",
				url: "https://commons.wikimedia.org/wiki/File:BMW_435i_Cabriolet_Luxury_(F33)_front.JPG",
				edited: true
			},
			{
				file: "/img/fleet/bmw-convertible-2.webp",
				title: "BMW 435i Cabriolet Luxury (F33) rear.JPG",
				author: "Tokumeigakarinoaoshima",
				license: "CC0",
				source: "Wikimedia Commons",
				url: "https://commons.wikimedia.org/wiki/File:BMW_435i_Cabriolet_Luxury_(F33)_rear.JPG",
				edited: true
			},
			{
				file: "/img/fleet/mercedes-gle.webp",
				title: "Mercedes-Benz GLE 450 4Matic Genf 2019 1Y7A5103.jpg",
				author: "Alexander Migl",
				license: "CC BY-SA 4.0",
				source: "Wikimedia Commons",
				url: "https://commons.wikimedia.org/wiki/File:Mercedes-Benz_GLE_450_4Matic_Genf_2019_1Y7A5103.jpg",
				edited: true
			},
			{
				file: "/img/fleet/mercedes-gle-interior.webp",
				title: "MERCEDES-BENZ GLE (W167) CHINA VERSION INTERIOR.jpg",
				author: "Dinkun Chen",
				license: "CC BY-SA 4.0",
				source: "Wikimedia Commons",
				url: "https://commons.wikimedia.org/wiki/File:MERCEDES-BENZ_GLE_(W167)_CHINA_VERSION_INTERIOR.jpg",
				edited: true
			},
			{
				file: "/img/places/eje-cafetero.webp",
				title: "Valle de Cocora, Colombia 03.jpg",
				author: "Bernard Gagnon",
				license: "CC BY-SA 4.0",
				url: "https://commons.wikimedia.org/wiki/File:Valle_de_Cocora,_Colombia_03.jpg"
			},
			{
				file: "/img/mood/cocora.webp",
				title: "Paisaje Valle del Cocora.jpg",
				author: "Estebanhphoto",
				license: "CC BY 4.0",
				url: "https://commons.wikimedia.org/wiki/File:Paisaje_Valle_del_Cocora.jpg",
				edited: true
			},
			{
				file: "/img/places/medellin.webp",
				title: "Medellín Panorámica.jpg",
				author: "Carlos Andres Granada",
				license: "CC BY-SA 4.0",
				url: "https://commons.wikimedia.org/wiki/File:Medell%C3%ADn_Panor%C3%A1mica.jpg",
				edited: true
			}
		],
		model: {
			label: "Modelo 3D: “2021 Chevrolet Tahoe RST” por David_Holiday (Sketchfab), CC BY 4.0, modificado",
			url: "https://sketchfab.com/3d-models/2021-chevrolet-tahoe-rst-police-c18bbb58fafa41f18b168f3a2d980850",
			license: "CC BY 4.0",
			licenseUrl: "https://creativecommons.org/licenses/by/4.0/deed.es",
			changes: "optimizado para la web, sin placas ni emblemas, materiales y colores propios"
		}
	},
	prive: { vapidPublicKey: "BOkyVqhxYdnw-p4Iw8iHj8Ict6EVeMRGx0VDBdl0yPydnx_KlnH7pHcy0waMIKzLqKIeUNWDJhap424VuXLQz1w" },
	brands: [
		"Toyota",
		"Chevrolet",
		"BMW",
		"Mercedes-Benz",
		"Mazda"
	]
};
//#endregion
//#region src/app/lib/s3.js
const enc = new TextEncoder();
const toHex = (buf) => Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
const sha256Hex = async (data) => toHex(await crypto.subtle.digest("SHA-256", typeof data === "string" ? enc.encode(data) : data));
async function hmac(key, msg) {
	const k = await crypto.subtle.importKey("raw", typeof key === "string" ? enc.encode(key) : key, {
		name: "HMAC",
		hash: "SHA-256"
	}, false, ["sign"]);
	return crypto.subtle.sign("HMAC", k, enc.encode(msg));
}
const uriEncode = (s) => encodeURIComponent(s).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
const encodeKey = (key) => key.split("/").map(uriEncode).join("/");
const amzDate = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
/**
* URL prefirmada (SigV4, "query string authentication").
* B2 acepta hasta 7 días (604 800 s).
*/
async function presign({ method = "GET", url, accessKeyId, secretAccessKey, region, expires = 900, date = /* @__PURE__ */ new Date() }) {
	const u = new URL(url);
	const stamp = amzDate(date);
	const day = stamp.slice(0, 8);
	const scope = `${day}/${region}/s3/aws4_request`;
	const params = [...u.searchParams.entries()];
	params.push(["X-Amz-Algorithm", "AWS4-HMAC-SHA256"], ["X-Amz-Credential", `${accessKeyId}/${scope}`], ["X-Amz-Date", stamp], ["X-Amz-Expires", String(expires)], ["X-Amz-SignedHeaders", "host"]);
	const query = params.map(([k, v]) => [uriEncode(k), uriEncode(v)]).sort((a, b) => a[0] === b[0] ? a[1] < b[1] ? -1 : 1 : a[0] < b[0] ? -1 : 1).map(([k, v]) => `${k}=${v}`).join("&");
	const canonical = [
		method,
		u.pathname,
		query,
		`host:${u.host}`,
		"",
		"host",
		"UNSIGNED-PAYLOAD"
	].join("\n");
	const toSign = [
		"AWS4-HMAC-SHA256",
		stamp,
		scope,
		await sha256Hex(canonical)
	].join("\n");
	let key = await hmac(`AWS4${secretAccessKey}`, day);
	for (const part of [
		region,
		"s3",
		"aws4_request"
	]) key = await hmac(key, part);
	return `${u.origin}${u.pathname}?${query}&X-Amz-Signature=${toHex(await hmac(key, toSign))}`;
}
var S3Error = class extends Error {
	constructor(status, code, message) {
		super(message || code || `HTTP ${status}`);
		this.status = status;
		this.code = code;
	}
};
async function fail(res) {
	const text = await res.text().catch(() => "");
	const pick = (tag) => text.match(new RegExp(`<${tag}>([^<]*)</${tag}>`))?.[1];
	throw new S3Error(res.status, pick("Code"), pick("Message"));
}
/**
* cfg: { endpoint: 'https://s3.us-west-004.backblazeb2.com', region: 'us-west-004',
*        bucket, accessKeyId, secretAccessKey }
* Direcciones en estilo "path" (…/bucket/clave): no dependen del DNS del bucket.
*/
function createS3(cfg) {
	const base = cfg.endpoint.replace(/\/+$/, "");
	const objectUrl = (key) => `${base}/${cfg.bucket}/${encodeKey(key)}`;
	const sign = (method, url, expires = 900) => presign({
		method,
		url,
		expires,
		...cfg
	});
	async function call(method, key, { body, type, query } = {}) {
		let url = key == null ? `${base}/${cfg.bucket}` : objectUrl(key);
		if (query) url += `?${new URLSearchParams(query)}`;
		return fetch(await sign(method, url), {
			method,
			body,
			headers: type ? { "Content-Type": type } : void 0,
			cache: "no-store"
		});
	}
	return {
		config: cfg,
		/** Enlace temporal de descarga (por defecto 15 min). */
		url: (key, expires = 900) => sign("GET", objectUrl(key), expires),
		/** Enlace temporal para subir un archivo a esa clave (por defecto 15 min). */
		putUrl: (key, expires = 900) => sign("PUT", objectUrl(key), expires),
		async getJSON(key) {
			const res = await call("GET", key);
			if (res.status === 404) return null;
			if (!res.ok) await fail(res);
			return res.json();
		},
		async getBlob(key) {
			const res = await call("GET", key);
			if (res.status === 404) return null;
			if (!res.ok) await fail(res);
			return res.blob();
		},
		async put(key, body, type = "application/octet-stream") {
			const res = await call("PUT", key, {
				body,
				type
			});
			if (!res.ok) await fail(res);
			return { etag: res.headers.get("etag") };
		},
		putJSON(key, obj) {
			return this.put(key, JSON.stringify(obj), "application/json");
		},
		async exists(key) {
			const res = await call("HEAD", key);
			if (res.status === 404) return false;
			if (!res.ok) await fail(res);
			return true;
		},
		async remove(key) {
			const res = await call("DELETE", key);
			if (!res.ok && res.status !== 404) await fail(res);
		},
		/** Claves bajo un prefijo (ListObjectsV2, con paginación). */
		async list(prefix = "") {
			const keys = [];
			let token;
			do {
				const query = {
					"list-type": "2",
					prefix,
					"max-keys": "1000"
				};
				if (token) query["continuation-token"] = token;
				const res = await call("GET", null, { query });
				if (!res.ok) await fail(res);
				const xml = await res.text();
				for (const m of xml.matchAll(/<Contents>([\s\S]*?)<\/Contents>/g)) {
					const pick = (tag) => m[1].match(new RegExp(`<${tag}>([^<]*)</${tag}>`))?.[1];
					keys.push({
						key: unxml(pick("Key")),
						size: Number(pick("Size") || 0),
						modified: pick("LastModified")
					});
				}
				token = /<IsTruncated>true<\/IsTruncated>/.test(xml) ? unxml(xml.match(/<NextContinuationToken>([^<]*)</)?.[1] || "") : null;
			} while (token);
			return keys;
		}
	};
}
const unxml = (s = "") => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&apos;/g, "'").replace(/&amp;/g, "&");
//#endregion
//#region src/data/fleet.js
const WHITE = "#f3f3f0";
const fleet = [
	{
		id: "toyota-prado-tx",
		real: true,
		brand: "Toyota",
		model: "Prado TX",
		edition: "Blindada",
		year: 2015,
		type: "Camioneta blindada",
		category: "suv",
		tags: ["blindado"],
		article: "la",
		units: 2,
		refPhotos: true,
		colors: [{
			name: "Gris",
			swatch: "#8d9095",
			image: "/img/fleet/toyota-prado-tx.webp"
		}, {
			name: "Blanco",
			swatch: WHITE,
			image: "/img/fleet/toyota-prado-tx-blanca.webp"
		}],
		tagline: "Blindaje nivel 2 y motor turbo diésel: la tranquilidad de moverte por Medellín sin pensarlo dos veces.",
		description: "La camioneta que eligen quienes no negocian su seguridad. Tenemos dos unidades —una gris y una blanca— con blindaje nivel 2, motor 3.0 turbo diésel con el torque para la montaña y la carretera, tracción 4x4 y la robustez de la Land Cruiser. Disponibles con conductor.",
		image: "/img/fleet/toyota-prado-tx.webp",
		gallery: ["/img/fleet/toyota-prado-tx-2.webp"],
		key: [
			{
				label: "Blindaje",
				value: "Nivel 2",
				short: "Blindaje nivel 2"
			},
			{
				label: "Motor",
				value: "3.0",
				unit: "L",
				short: "3.0 L turbo diésel"
			},
			{
				label: "Tracción",
				value: "4x4"
			}
		],
		specs: {
			version: "Land Cruiser Prado TX",
			engine: "3.0 L turbo diésel de 4 cilindros (D-4D)",
			hp: 171,
			torque: 410,
			drivetrain: "4x4",
			fuel: "Diésel"
		},
		sheet: [["Blindaje", "Nivel 2 (protección contra armas de fuego cortas), en las dos unidades"], ["Carrocería", "Camioneta de 5 puertas"]],
		badges: ["Blindaje nivel 2", "Turbo diésel"],
		pricePerDay: 5e5,
		featured: true,
		armored: true,
		chauffeur: true
	},
	{
		id: "chevrolet-tahoe",
		real: true,
		brand: "Chevrolet",
		model: "Tahoe",
		edition: "Z71",
		year: 2023,
		type: "SUV grande",
		category: "suv",
		article: "la",
		color: "Blanco",
		swatch: WHITE,
		tagline: "Presencia imponente, tres filas de asientos y un V8 que llega con autoridad.",
		description: "La SUV más grande de la flota, en versión Z71. Cabina amplia con tres filas de asientos, pantallas para los pasajeros de atrás y un V8 de 5.3 litros con caja automática de 10 velocidades: ideal para traslados ejecutivos, viajes en familia y llegadas que no pasan desapercibidas.",
		image: "/img/fleet/chevrolet-tahoe.webp",
		gallery: [
			"/img/fleet/chevrolet-tahoe-2.webp",
			"/img/fleet/chevrolet-tahoe-3.webp",
			"/img/fleet/chevrolet-tahoe-4.webp",
			"/img/fleet/chevrolet-tahoe-interior.webp",
			"/img/fleet/chevrolet-tahoe-interior-2.webp"
		],
		key: [
			{
				label: "Motor",
				value: "V8 5.3",
				unit: "L",
				short: "V8 5.3 L"
			},
			{
				label: "Potencia",
				value: "355",
				unit: "HP"
			},
			{
				label: "Tracción",
				value: "4x4"
			}
		],
		specs: {
			version: "Tahoe Z71",
			hp: 355,
			torque: 518,
			engine: "V8 de 5.3 L a gasolina (EcoTec3)",
			transmission: "Automática de 10 velocidades",
			drivetrain: "4x4",
			fuel: "Gasolina"
		},
		sheet: [["Cabina", "Tres filas de asientos y pantallas para los pasajeros de atrás"]],
		badges: ["V8", "Tres filas"],
		pricePerDay: 8e5,
		featured: true,
		armored: false,
		chauffeur: true
	},
	{
		id: "mercedes-gle",
		real: true,
		brand: "Mercedes-Benz",
		model: "GLE 450",
		year: 2024,
		refPhotos: true,
		type: "SUV de lujo",
		category: "suv",
		article: "la",
		color: "Gris plata",
		swatch: "#a7aaae",
		tagline: "El lujo de Mercedes-Benz en formato SUV: seis cilindros, tracción 4MATIC y una cabina de primera clase.",
		description: "La SUV de lujo de Mercedes-Benz en nuestra flota. Motor de seis cilindros en línea con asistencia eléctrica de 48 V (híbrido ligero), caja automática 9G-TRONIC y tracción integral 4MATIC, con una cabina amplia y silenciosa para recorrer Medellín y la montaña con total confort.",
		image: "/img/fleet/mercedes-gle.webp",
		gallery: [
			"/img/fleet/mercedes-gle-2.webp",
			"/img/fleet/mercedes-gle-3.webp",
			"/img/fleet/mercedes-gle-interior.webp"
		],
		key: [
			{
				label: "Motor",
				value: "6",
				unit: "cil.",
				short: "6 cilindros turbo"
			},
			{
				label: "Tracción",
				value: "4MATIC"
			},
			{
				label: "Transmisión",
				value: "9",
				unit: "vel.",
				short: "9G-TRONIC"
			}
		],
		specs: {
			version: "GLE 450 4MATIC",
			engine: "3.0 L de 6 cilindros en línea turbo, híbrido ligero de 48 V (motor-generador integrado)",
			transmission: "Automática 9G-TRONIC de 9 velocidades",
			drivetrain: "Integral 4MATIC",
			fuel: "Gasolina"
		},
		badges: ["4MATIC", "Seis cilindros"],
		pricePerDay: 9e5,
		featured: true,
		armored: false,
		chauffeur: true
	},
	{
		id: "bmw-x4",
		real: true,
		brand: "BMW",
		model: "X4",
		year: 2022,
		type: "SUV coupé",
		category: "suv",
		article: "la",
		color: "Gris humo",
		swatch: "#8a8c8b",
		tagline: "Silueta coupé, alma deportiva y tracción integral xDrive.",
		description: "El SUV coupé de BMW: la postura elevada de una SUV con la línea de techo de un deportivo. Tracción integral inteligente xDrive, caja Steptronic de 8 velocidades y una cabina pensada alrededor del conductor.",
		image: "/img/fleet/bmw-x4.webp",
		gallery: [
			"/img/fleet/bmw-x4-2.webp",
			"/img/fleet/bmw-x4-3.webp",
			"/img/fleet/bmw-x4-4.webp",
			"/img/fleet/bmw-x4-interior.webp",
			"/img/fleet/bmw-x4-interior-2.webp"
		],
		key: [
			{
				label: "Versión",
				value: "xDrive30i",
				short: "xDrive30i"
			},
			{
				label: "Motor",
				value: "2.0",
				unit: "L",
				short: "2.0 L turbo"
			},
			{
				label: "Transmisión",
				value: "8",
				unit: "vel.",
				short: "Steptronic 8 vel."
			}
		],
		specs: {
			version: "X4 xDrive30i",
			engine: "2.0 L TwinPower Turbo de 4 cilindros a gasolina",
			torque: 350,
			seats: 5,
			transmission: "Automática Steptronic de 8 velocidades",
			drivetrain: "Integral inteligente xDrive",
			fuel: "Gasolina"
		},
		sheet: [["Carrocería", "SUV coupé de 5 puertas"], ["Interior", "Cuero color coñac y techo panorámico"]],
		badges: ["xDrive"],
		pricePerDay: 8e5,
		featured: true,
		armored: false,
		chauffeur: true
	},
	{
		id: "bmw-convertible",
		real: true,
		brand: "BMW",
		model: "Cabrio",
		year: 2016,
		refPhotos: true,
		type: "Convertible",
		category: "convertible",
		article: "el",
		color: "Gris plata",
		swatch: "#a7aaae",
		tagline: "Cielo abierto y el sonido del camino: la forma más libre de recorrer Antioquia.",
		description: "Capota abajo, el clima de la eterna primavera y una carretera de montaña por delante. Para escapadas, celebraciones y atardeceres que se viven mejor al aire libre.",
		image: "/img/fleet/bmw-convertible.webp",
		gallery: ["/img/fleet/bmw-convertible-2.webp", "/img/fleet/bmw-convertible-interior.webp"],
		key: [
			{
				label: "Carrocería",
				value: "Convertible"
			},
			{
				label: "Capota",
				value: "Eléctrica"
			},
			{
				label: "Ideal para",
				value: "Escapadas"
			}
		],
		specs: {},
		badges: ["Cielo abierto"],
		pricePerDay: 5e5,
		featured: true,
		armored: false,
		chauffeur: true
	},
	{
		id: "mercedes-sprinter",
		real: true,
		brand: "Mercedes-Benz",
		model: "Sprinter",
		edition: "Ejecutiva",
		year: null,
		type: "Van ejecutiva",
		category: "van",
		article: "la",
		color: "Negro",
		swatch: "#101012",
		tagline: "Tu grupo, junto y con estilo: la van ejecutiva para eventos, viajes y traslados.",
		description: "Servicio especial con conductor para grupos: bodas, eventos corporativos, traslados al aeropuerto y recorridos a la medida. Se cotiza por jornada de 12 horas y, para recorridos o servicios específicos, el valor se acuerda según el trayecto.",
		image: "/img/fleet/mercedes-sprinter.webp",
		gallery: [
			"/img/fleet/mercedes-sprinter-2.webp",
			"/img/fleet/mercedes-sprinter-3.webp",
			"/img/fleet/mercedes-sprinter-interior.webp",
			"/img/fleet/mercedes-sprinter-interior-2.webp",
			"/img/fleet/mercedes-sprinter-interior-3.webp"
		],
		key: [
			{
				label: "Servicio",
				value: "Con conductor"
			},
			{
				label: "Jornada",
				value: "12",
				unit: "h",
				short: "Jornada de 12 h"
			},
			{
				label: "Ideal para",
				value: "Grupos"
			}
		],
		specs: {},
		sheetTitle: "Detalles del servicio",
		sheet: [
			["Servicio", "Especial, con conductor"],
			["Cabina", "Sillas ejecutivas individuales en cuero e iluminación ambiental"],
			["Tarifa", "Por jornada de 12 horas"],
			["Recorridos", "Valor negociable según el trayecto"]
		],
		badges: ["Servicio especial", "Con conductor"],
		pricePerDay: 17e5,
		priceUnit: "12 horas",
		priceNote: "Jornada de 12 horas · precio negociable según el recorrido",
		featured: true,
		armored: false,
		chauffeur: true,
		selfDrive: false
	},
	{
		id: "mercedes-a200",
		real: true,
		brand: "Mercedes-Benz",
		model: "A 200",
		edition: "Hatchback",
		year: 2022,
		type: "Hatchback premium",
		category: "sedan",
		article: "el",
		color: "Blanco",
		swatch: WHITE,
		tagline: "La estrella de tres puntas en su versión más ágil y urbana.",
		description: "Elegancia alemana en formato compacto: motor turbo de 163 hp, caja de doble embrague de 7 velocidades y la cabina digital MBUX con dos pantallas. Ideal para reuniones, cenas y fines de semana en la ciudad.",
		image: "/img/fleet/mercedes-a200.webp",
		gallery: [
			"/img/fleet/mercedes-a200-2.webp",
			"/img/fleet/mercedes-a200-3.webp",
			"/img/fleet/mercedes-a200-4.webp",
			"/img/fleet/mercedes-a200-5.webp",
			"/img/fleet/mercedes-a200-6.webp",
			"/img/fleet/mercedes-a200-interior.webp",
			"/img/fleet/mercedes-a200-interior-2.webp"
		],
		key: [
			{
				label: "Potencia",
				value: "163",
				unit: "HP"
			},
			{
				label: "0–100 km/h",
				value: "8,0",
				unit: "s"
			},
			{
				label: "Vel. máxima",
				value: "225",
				unit: "km/h"
			}
		],
		specs: {
			version: "A 200 Hatchback",
			hp: 163,
			torque: 250,
			accel: 8,
			top: 225,
			seats: 5,
			engine: "1.3 L turbo de 4 cilindros a gasolina",
			transmission: "Automática de doble embrague 7G-DCT",
			drivetrain: "Delantera",
			fuel: "Gasolina"
		},
		badges: [],
		pricePerDay: 4e5,
		featured: true,
		armored: false,
		chauffeur: true
	},
	{
		id: "toyota-4runner",
		real: true,
		brand: "Toyota",
		model: "4Runner",
		year: 2018,
		refPhotos: true,
		type: "Camioneta SUV",
		category: "suv",
		article: "la",
		color: "Gris plata",
		swatch: "#a7aaae",
		tagline: "Alma todoterreno y presencia de sobra: lista para la ciudad, la finca o la montaña.",
		description: "Una SUV de carácter, con chasis robusto, tracción 4x4 y un V6 de 4.0 litros que sube las montañas antioqueñas sin esfuerzo. Altura, espacio y confianza para cualquier plan.",
		image: "/img/fleet/toyota-4runner.webp",
		gallery: [
			"/img/fleet/toyota-4runner-2.webp",
			"/img/fleet/toyota-4runner-3.webp",
			"/img/fleet/toyota-4runner-interior.webp"
		],
		key: [
			{
				label: "Motor",
				value: "V6 4.0",
				unit: "L",
				short: "V6 4.0 L"
			},
			{
				label: "Potencia",
				value: "270",
				unit: "HP"
			},
			{
				label: "Tracción",
				value: "4x4"
			}
		],
		specs: {
			hp: 270,
			torque: 377,
			engine: "V6 de 4.0 L a gasolina (1GR-FE)",
			transmission: "Automática de 5 velocidades",
			drivetrain: "4x4",
			fuel: "Gasolina"
		},
		badges: ["4x4"],
		pricePerDay: 5e5,
		featured: true,
		armored: false,
		chauffeur: true
	},
	{
		id: "mazda-cx30-hybrid",
		real: true,
		brand: "Mazda",
		model: "CX-30",
		edition: "Híbrida",
		year: 2023,
		type: "SUV híbrida",
		category: "suv",
		tags: ["hibrido"],
		article: "la",
		color: "Blanco",
		swatch: WHITE,
		tagline: "Diseño Kodo y tecnología híbrida ligera: elegancia compacta para moverte por la ciudad.",
		description: "Líneas limpias, cabina de acabados premium y un motor 2.0 asistido por un sistema híbrido ligero de 24 V que suaviza los arranques y reduce el consumo. Con techo corredizo, pantalla de 8,8\" y siete airbags.",
		image: "/img/fleet/mazda-cx30-hybrid.webp",
		gallery: [
			"/img/fleet/mazda-cx30-hybrid-2.webp",
			"/img/fleet/mazda-cx30-hybrid-3.webp",
			"/img/fleet/mazda-cx30-hybrid-4.webp",
			"/img/fleet/mazda-cx30-hybrid-5.webp",
			"/img/fleet/mazda-cx30-hybrid-interior.webp",
			"/img/fleet/mazda-cx30-hybrid-interior-2.webp",
			"/img/fleet/mazda-cx30-hybrid-interior-3.webp"
		],
		key: [
			{
				label: "Sistema",
				value: "Híbrido ligero"
			},
			{
				label: "Potencia",
				value: "153",
				unit: "HP"
			},
			{
				label: "Motor",
				value: "2.0",
				unit: "L",
				short: "2.0 L"
			}
		],
		specs: {
			hp: 153,
			torque: 200,
			seats: 5,
			engine: "2.0 L Skyactiv-G a gasolina",
			hybrid: "Híbrido ligero de 24 V",
			transmission: "Automática de 6 velocidades",
			drivetrain: "Delantera",
			fuel: "Gasolina · híbrido ligero"
		},
		sheet: [["Equipamiento", "Techo corredizo, pantalla de 8,8\", Android Auto y Apple CarPlay, monitor de punto ciego y 7 airbags"]],
		badges: ["Híbrida"],
		pricePerDay: 38e4,
		featured: true,
		armored: false,
		chauffeur: true
	},
	{
		id: "mazda-cx5",
		real: true,
		brand: "Mazda",
		model: "CX-5",
		year: 2018,
		type: "SUV",
		category: "suv",
		article: "la",
		color: "Blanco",
		swatch: WHITE,
		tagline: "Elegancia, confort y un manejo ágil que se disfruta en cada curva.",
		description: "La segunda generación de la SUV insignia de Mazda: diseño Kodo, cabina silenciosa y espacio cómodo para cinco con su equipaje. Perfecta para la ciudad y para escaparse el fin de semana.",
		image: "/img/fleet/mazda-cx5.webp",
		gallery: [
			"/img/fleet/mazda-cx5-2.webp",
			"/img/fleet/mazda-cx5-3.webp",
			"/img/fleet/mazda-cx5-4.webp",
			"/img/fleet/mazda-cx5-5.webp",
			"/img/fleet/mazda-cx5-interior.webp"
		],
		key: [
			{
				label: "Versión",
				value: "Touring"
			},
			{
				label: "Potencia",
				value: "153",
				unit: "HP",
				short: "153 HP"
			},
			{
				label: "Motor",
				value: "2.0",
				unit: "L",
				short: "2.0 L Skyactiv-G"
			}
		],
		specs: {
			version: "CX-5 Touring 2.0",
			engine: "2.0 L Skyactiv-G de 4 cilindros a gasolina",
			hp: 153,
			torque: 200,
			seats: 5,
			transmission: "Automática de 6 velocidades",
			drivetrain: "Delantera",
			fuel: "Gasolina"
		},
		badges: [],
		pricePerDay: 4e5,
		featured: false,
		armored: false,
		chauffeur: true
	},
	{
		id: "toyota-corolla-hybrid",
		real: true,
		brand: "Toyota",
		model: "Corolla",
		edition: "Híbrido",
		year: 2026,
		type: "Sedán híbrido",
		category: "sedan",
		tags: ["hibrido"],
		article: "el",
		color: "Blanco",
		swatch: WHITE,
		tagline: "Silencio eléctrico en la ciudad y eficiencia en cada kilómetro.",
		description: "El más nuevo de la flota, modelo 2026. Su sistema híbrido autorrecargable combina un motor 1.8 a gasolina con uno eléctrico: no se enchufa, se recarga solo mientras ruedas y circula en silencio a baja velocidad.",
		image: "/img/fleet/toyota-corolla-hybrid.webp",
		gallery: [
			"/img/fleet/toyota-corolla-hybrid-2.webp",
			"/img/fleet/toyota-corolla-hybrid-3.webp",
			"/img/fleet/toyota-corolla-hybrid-4.webp",
			"/img/fleet/toyota-corolla-hybrid-interior.webp",
			"/img/fleet/toyota-corolla-hybrid-interior-2.webp"
		],
		key: [
			{
				label: "Sistema",
				value: "Híbrido"
			},
			{
				label: "Potencia",
				value: "121",
				unit: "HP"
			},
			{
				label: "Modelo",
				value: "2026"
			}
		],
		specs: {
			hp: 121,
			hpLabel: "Potencia combinada",
			seats: 5,
			engine: "1.8 L a gasolina + motor eléctrico",
			hybrid: "Híbrido autorrecargable (HEV): no se enchufa",
			transmission: "Automática e-CVT",
			drivetrain: "Delantera",
			fuel: "Gasolina · híbrido"
		},
		badges: ["Híbrido", "Modelo 2026"],
		pricePerDay: 3e5,
		featured: false,
		armored: false,
		chauffeur: true
	},
	{
		id: "mazda-3",
		real: true,
		brand: "Mazda",
		model: "3",
		edition: "Sedán",
		year: 2020,
		type: "Sedán",
		category: "sedan",
		article: "el",
		color: "Blanco",
		swatch: WHITE,
		tagline: "Diseño Kodo, manejo preciso y el tamaño justo para moverte por la ciudad.",
		description: "El sedán de Mazda: líneas limpias, una cabina de acabados premium y un manejo ágil que se disfruta en cada curva. Cómodo para la ciudad, con baúl para el equipaje del fin de semana.",
		image: "/img/fleet/mazda-3.webp",
		gallery: [
			"/img/fleet/mazda-3-2.webp",
			"/img/fleet/mazda-3-3.webp",
			"/img/fleet/mazda-3-interior.webp",
			"/img/fleet/mazda-3-interior-2.webp"
		],
		key: [
			{
				label: "Carrocería",
				value: "Sedán"
			},
			{
				label: "Puertas",
				value: "4",
				short: "4 puertas"
			},
			{
				label: "Motor",
				value: "Skyactiv-G"
			}
		],
		specs: {
			seats: 5,
			engine: "Skyactiv-G a gasolina",
			fuel: "Gasolina"
		},
		badges: [],
		pricePerDay: 3e5,
		featured: false,
		armored: false,
		chauffeur: true
	}
];
fleet.filter((car) => car.featured);
//#endregion
//#region src/app/lib/util.js
const cop = new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 });
/** 2400000 → "$ 2.400.000" */
const money = (n) => `$ ${cop.format(Math.round(Number(n) || 0))}`;
const startOfDay = (d = /* @__PURE__ */ new Date()) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n, d.getHours(), d.getMinutes());
const startOfMonth = (d = /* @__PURE__ */ new Date()) => new Date(d.getFullYear(), d.getMonth(), 1);
const startOfNextMonth = (d = /* @__PURE__ */ new Date()) => new Date(d.getFullYear(), d.getMonth() + 1, 1);
const fmt = (opts) => new Intl.DateTimeFormat("es-CO", opts);
const fTime = fmt({
	hour: "numeric",
	minute: "2-digit",
	hour12: true
});
fmt({
	weekday: "long",
	day: "numeric",
	month: "long"
});
const fDayShort = fmt({
	weekday: "short",
	day: "numeric",
	month: "short"
});
const fDate = fmt({
	day: "numeric",
	month: "long",
	year: "numeric"
});
fmt({
	day: "numeric",
	month: "short"
});
fmt({
	month: "long",
	year: "numeric"
});
const clean = (s) => s.replace(/\s/g, " ");
/**
* Fecha a partir de ISO, número o "2026-11-15". Una fecha sin hora es ese
* día en Colombia (new Date('2026-11-15') sería medianoche UTC: el 14 aquí).
*/
const toDate = (d) => typeof d === "string" && /^\d{4}-\d{2}-\d{2}$/.test(d) ? new Date(+d.slice(0, 4), +d.slice(5, 7) - 1, +d.slice(8, 10)) : new Date(d);
/** "6:00 p. m." */
const time = (d) => clean(fTime.format(toDate(d)));
/** "lun 27 oct" */
const dayShort = (d) => fDayShort.format(toDate(d)).replace(/[.,]/g, "");
/** "27 de octubre de 2026" */
const dateLong = (d) => fDate.format(toDate(d));
/** Saludo según la hora. */
function greeting(d = /* @__PURE__ */ new Date()) {
	const h = d.getHours();
	return h < 12 ? "Buenos días" : h < 19 ? "Buenas tardes" : "Buenas noches";
}
const TIPOS_DOC = [
	{
		id: "soat",
		nombre: "SOAT",
		detalle: "Seguro obligatorio de accidentes de tránsito",
		entidad: "Aseguradora",
		numero: "N.º de póliza",
		obligatorio: true
	},
	{
		id: "tecno",
		nombre: "Tecnomecánica",
		detalle: "Revisión técnico-mecánica y de gases",
		entidad: "CDA (centro de diagnóstico)",
		numero: "N.º de certificado",
		obligatorio: true
	},
	{
		id: "seguro",
		nombre: "Seguro todo riesgo",
		detalle: "Póliza voluntaria del vehículo",
		entidad: "Aseguradora",
		numero: "N.º de póliza"
	},
	{
		id: "impuesto",
		nombre: "Impuesto vehicular",
		detalle: "Pago anual del impuesto",
		entidad: "Gobernación o Secretaría de Hacienda",
		numero: "N.º de recibo"
	},
	{
		id: "extintor",
		nombre: "Extintor",
		detalle: "Recarga del extintor",
		entidad: "Empresa de recarga",
		numero: "N.º de certificado"
	},
	{
		id: "blindaje",
		nombre: "Permiso de blindaje",
		detalle: "Supervigilancia · vehículo blindado",
		entidad: "Superintendencia de Vigilancia",
		numero: "N.º de resolución",
		blindados: true,
		obligatorio: true
	},
	{
		id: "mantenimiento",
		nombre: "Mantenimiento",
		detalle: "Próximo cambio de aceite o revisión",
		entidad: "Taller",
		numero: "Orden de trabajo",
		km: true
	},
	{
		id: "licencia",
		nombre: "Licencia de tránsito",
		detalle: "Tarjeta de propiedad · no vence",
		entidad: "Organismo de tránsito",
		numero: "N.º de licencia",
		sinVencimiento: true
	}
];
const tipoDoc = (id) => TIPOS_DOC.find((t) => t.id === id) || {
	id: "otro",
	nombre: "Documento",
	detalle: "Documento del carro",
	entidad: "Entidad",
	numero: "Número"
};
/** Nombre del documento (los agregados por el dueño tienen el suyo). */
const nombreDoc = (d) => d?.tipo === "otro" ? d.nombre || "Documento" : tipoDoc(d?.tipo).nombre;
/** Días que faltan (negativo si ya venció), contando fechas sin hora. */
function diasPara(fecha, now = /* @__PURE__ */ new Date()) {
	const [y, m, d] = String(fecha || "").slice(0, 10).split("-").map(Number);
	if (!y || !m || !d) return null;
	return Math.round((new Date(y, m - 1, d) - startOfDay(now)) / 864e5);
}
/**
* Estado de un documento:
*   sin-cargar · no hay registro        no-vence · licencia de tránsito
*   sin-fecha  · cargado sin fecha      vigente · por-vencer (≤ aviso días) · vencido
*/
function estadoDoc(doc, now = /* @__PURE__ */ new Date(), aviso = 20) {
	if (!doc) return {
		estado: "sin-cargar",
		dias: null
	};
	if (doc.tipo !== "otro" && tipoDoc(doc.tipo).sinVencimiento) return {
		estado: "no-vence",
		dias: null
	};
	const dias = diasPara(doc.vence, now);
	if (dias == null) return {
		estado: "sin-fecha",
		dias: null
	};
	if (dias < 0) return {
		estado: "vencido",
		dias
	};
	if (dias <= aviso) return {
		estado: "por-vencer",
		dias
	};
	return {
		estado: "vigente",
		dias
	};
}
/** "Vence en 12 días", "Vence mañana", "Vence hoy", "Venció hace 3 días". */
function diasTexto(dias) {
	if (dias == null) return "";
	if (dias < 0) return `Venció hace ${-dias} ${dias === -1 ? "día" : "días"}`;
	if (dias === 0) return "Vence hoy";
	if (dias === 1) return "Vence mañana";
	return `Vence en ${dias} días`;
}
const vivos = (docs) => (docs || []).filter((d) => !d.borrado);
/** Vencidos o por vencer de toda la flota, del más urgente al menos. */
function alertasDocs(docs, vehicles, now = /* @__PURE__ */ new Date(), aviso = 20) {
	const byId = new Map(vehicles.map((v) => [v.id, v]));
	const out = [];
	for (const d of vivos(docs)) {
		const v = byId.get(d.vehiculoId);
		if (!v) continue;
		const st = estadoDoc(d, now, aviso);
		if (st.estado === "vencido" || st.estado === "por-vencer") out.push({
			vehiculo: v,
			documento: d,
			...st
		});
	}
	return out.sort((a, b) => a.dias - b.dias);
}
/**
* Etapa del aviso (para no repetir notificaciones): el primer aviso a los
* `aviso` días, luego a los 10, 5, mañana (1), hoy (0) y vencido.
* Devuelve null si todavía falta más que `aviso`.
*/
function etapaAviso(dias, aviso = 20) {
	if (dias == null) return null;
	if (dias < 0) return "vencido";
	const etapas = [.../* @__PURE__ */ new Set([
		aviso,
		10,
		5,
		1,
		0
	])].filter((m) => m <= aviso && dias <= m);
	return etapas.length ? String(Math.min(...etapas)) : null;
}
//#endregion
//#region src/app/data/negocio.js
/** Unidades físicas a partir del catálogo (la Prado TX tiene dos: gris y blanca). */
function catalogUnits() {
	const out = [];
	for (const car of fleet) {
		const base = {
			modelo: car.id,
			marca: car.brand,
			nombre: `${car.model}${car.edition ? ` ${car.edition}` : ""}`,
			anio: car.year || null,
			tipo: car.type || "",
			tarifa: car.pricePerDay ?? null,
			unidad: car.priceUnit || "día",
			soloConChofer: car.selfDrive === false,
			blindado: !!car.tags?.includes("blindado"),
			fotos: [car.image, ...car.gallery || []],
			refFotos: !!car.refPhotos
		};
		const variants = car.colors?.filter((c) => c.image) || [];
		if ((car.units || 1) > 1 && variants.length > 1) variants.forEach((v) => {
			const slug = v.name.toLowerCase().normalize("NFD").replace(/[^\w]+/g, "");
			out.push({
				...base,
				id: `${car.id}-${slug}`,
				color: v.name,
				variante: v.name,
				swatch: v.swatch,
				foto: v.image,
				fotos: [v.image, ...base.fotos.filter((f) => f !== v.image)]
			});
		});
		else out.push({
			...base,
			id: car.id,
			color: car.color || car.colors?.[0]?.name || "",
			swatch: car.swatch || car.colors?.[0]?.swatch || "",
			foto: car.image
		});
	}
	return out;
}
/** Une el catálogo con lo que el dueño editó (placa, km, papeles, taller…). */
function mergeVehicles(saved = []) {
	const byId = new Map(saved.filter((v) => !v.borrado).map((v) => [v.id, v]));
	const units = catalogUnits().map((u) => ({
		...u,
		placa: "",
		km: null,
		taller: false,
		notas: "",
		...byId.get(u.id),
		...pick(u)
	}));
	for (const v of byId.values()) if (!units.some((u) => u.id === v.id)) units.push({
		fotos: [],
		foto: "",
		...v
	});
	return units;
}
const pick = (u) => ({
	modelo: u.modelo,
	marca: u.marca,
	nombre: u.nombre,
	variante: u.variante || "",
	fotos: u.fotos,
	foto: u.foto,
	refFotos: u.refFotos,
	soloConChofer: u.soloConChofer,
	blindado: u.blindado,
	unidad: u.unidad
});
const vehicleName = (v) => v ? `${v.marca} ${v.nombre}` : "Vehículo";
/** Nombre para la app: con el color cuando hay dos unidades del mismo modelo (Prado TX gris / blanca). */
const vehicleLabel = (v) => v ? `${vehicleName(v)}${v.variante ? ` · ${v.variante}` : ""}` : "Vehículo";
/**
* reservado    · aún no empieza
* en-curso     · entre la entrega y la devolución (el carro está afuera)
* por-recibir  · ya pasó la hora de devolución y no se ha recibido
* finalizado / cancelado
*/
function phase(c, now = Date.now()) {
	if (c.estado === "cancelado") return "cancelado";
	if (c.estado === "finalizado") return "finalizado";
	const ini = Date.parse(c.inicio);
	const fin = Date.parse(c.fin);
	if (c.estado === "activo" || now >= ini) return now >= fin ? "por-recibir" : "en-curso";
	return "reservado";
}
const live = (contracts) => contracts.filter((c) => !c.borrado);
/** Estado de un carro ahora: taller, en-renta, por-recibir, reservado o disponible. */
function vehicleStatus(v, contracts, now = Date.now()) {
	const mine = live(contracts).filter((c) => c.vehiculoId === v.id);
	const out = mine.find((c) => ["en-curso", "por-recibir"].includes(phase(c, now)));
	if (out) return {
		estado: phase(out, now) === "por-recibir" ? "por-recibir" : "en-renta",
		contrato: out
	};
	if (v.taller) return { estado: "taller" };
	const next = mine.filter((c) => phase(c, now) === "reservado").sort((a, b) => Date.parse(a.inicio) - Date.parse(b.inicio))[0];
	if (next) return {
		estado: "reservado",
		contrato: next
	};
	return { estado: "disponible" };
}
function totals(c) {
	const sub = (Number(c.tarifa) || 0) * (Number(c.cantidad) || 0);
	const extras = (c.extras || []).reduce((s, e) => s + (Number(e.valor) || 0), 0);
	const total = Math.max(0, sub + extras - (Number(c.descuento) || 0));
	const pagado = (c.pagos || []).reduce((s, p) => s + (Number(p.valor) || 0), 0);
	return {
		subtotal: sub,
		extras,
		total,
		pagado,
		saldo: Math.max(0, total - pagado)
	};
}
/** Lo que un contrato genera dentro de [desde, hasta). */
function earnedIn(c, desde, hasta) {
	if (c.borrado || c.estado === "cancelado") return 0;
	const ini = Date.parse(c.inicio);
	const fin = Date.parse(c.fin);
	const dur = fin - ini;
	if (!(dur > 0)) return 0;
	const overlap = Math.min(fin, +hasta) - Math.max(ini, +desde);
	return overlap > 0 ? totals(c).total * overlap / dur : 0;
}
const sum = (contracts, desde, hasta) => live(contracts).reduce((s, c) => s + earnedIn(c, desde, hasta), 0);
/** Resumen de ingresos de un mes (por defecto el actual). */
function revenue(contracts, ref = /* @__PURE__ */ new Date(), now = /* @__PURE__ */ new Date()) {
	const m0 = startOfMonth(ref);
	const m1 = startOfNextMonth(ref);
	const today = startOfDay(now);
	const tomorrow = addDays(today, 1);
	const isCurrent = now >= m0 && now < m1;
	const days = [];
	for (let d = new Date(m0); d < m1; d = addDays(d, 1)) days.push({
		dia: new Date(d),
		valor: sum(contracts, d, addDays(d, 1))
	});
	const prev0 = startOfMonth(addDays(m0, -1));
	const prevEnd = isCurrent ? new Date(Math.min(+new Date(prev0.getFullYear(), prev0.getMonth(), now.getDate() + 1), +m0)) : m0;
	const prevSameSpan = sum(contracts, prev0, prevEnd);
	const mesALaFecha = isCurrent ? sum(contracts, m0, tomorrow) : now >= m1 ? sum(contracts, m0, m1) : 0;
	const cobrado = live(contracts).flatMap((c) => c.estado === "cancelado" ? [] : c.pagos || []).filter((p) => Date.parse(p.fecha) >= +m0 && Date.parse(p.fecha) < +m1).reduce((s, p) => s + (Number(p.valor) || 0), 0);
	return {
		hoy: isCurrent ? sum(contracts, today, tomorrow) : 0,
		mesALaFecha,
		proyeccion: sum(contracts, m0, m1),
		mesAnteriorMismoPeriodo: prevSameSpan,
		cobrado,
		dias: days
	};
}
//#endregion
//#region scripts/avisos/enviar.mjs
const ESTADO = "avisos/estado.json";
const MIN = 6e4;
const ATRASO = 30 * MIN;
const GUARDAR_DIAS = 40;
/** "2 h", "1 h 30 min", "45 min" */
function falta(ms) {
	const m = Math.max(1, Math.round(ms / MIN));
	const h = Math.floor(m / 60);
	const r = m % 60;
	return h ? `${h} h${r ? ` ${r} min` : ""}` : `${m} min`;
}
const primerNombre = (c) => (c.cliente?.nombre || "el cliente").split(" ").slice(0, 2).join(" ");
const plural = (n, uno, varios) => `${n} ${n === 1 ? uno : varios}`;
const ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const mes = (d) => new Intl.DateTimeFormat("es-CO", { month: "long" }).format(d);
/**
* Decide qué avisar ahora. Puro (sin red): lo usa main() y las pruebas.
* datos: { ajustes, contratos, vehiculos, firmados:Set<contratoId> }
* Devuelve [{ clave, title, body, url, tag }] sin los ya enviados.
*/
function decidir({ ajustes = {}, contratos: todos = [], vehiculos = [], documentos: docs = [], firmados = /* @__PURE__ */ new Set() }, estado = {}, now = /* @__PURE__ */ new Date()) {
	const contratos = todos.filter((c) => !c.demo);
	const documentos = docs.filter((d) => !d.demo);
	const enviados = estado.enviados || {};
	const pref = ajustes.avisos || {};
	const antes = (Number(pref.antesMin) || 120) * MIN;
	const flota = mergeVehicles(vehiculos);
	const byId = new Map(flota.map((v) => [v.id, v]));
	const lista = live(contratos);
	const t = +now;
	const out = [];
	const add = (a) => !enviados[a.clave] && out.push(a);
	for (const c of lista) {
		if (["cancelado", "finalizado"].includes(c.estado)) continue;
		const v = byId.get(c.vehiculoId);
		const nombre = vehicleLabel(v);
		const url = `/privado/#/contratos/${c.id}`;
		const p = phase(c, t);
		const ini = Date.parse(c.inicio);
		const fin = Date.parse(c.fin);
		if (p === "reservado" && c.estado !== "activo" && ini - t > 0 && ini - t <= antes) add({
			clave: `entrega:${c.id}:${c.inicio}`,
			tag: `entrega-${c.id}`,
			url,
			title: `Entrega en ${falta(ini - t)} · ${nombre}`,
			body: [
				primerNombre(c),
				time(ini),
				c.lugarEntrega
			].filter(Boolean).join(" · ")
		});
		if (p === "en-curso" && fin - t > 0 && fin - t <= antes) add({
			clave: `devolucion:${c.id}:${c.fin}`,
			tag: `devolucion-${c.id}`,
			url,
			title: `Devolución en ${falta(fin - t)} · ${nombre}`,
			body: [
				primerNombre(c),
				time(fin),
				c.lugarDevolucion || c.lugarEntrega
			].filter(Boolean).join(" · ")
		});
		if (p === "por-recibir" && t - fin >= ATRASO) add({
			clave: `atraso:${c.id}:${c.fin}`,
			tag: `atraso-${c.id}`,
			url,
			title: `${nombre} no ha vuelto`,
			body: `Debía volver el ${dayShort(fin)} a las ${time(fin)} · ${primerNombre(c)}${c.cliente?.telefono ? ` · ${c.cliente.telefono}` : ""}`
		});
		if (c.firma?.estado === "enviado" && firmados.has(c.id)) add({
			clave: `firma:${c.id}:${c.firma.token}`,
			tag: `firma-${c.id}`,
			url,
			title: `${primerNombre(c)} firmó el contrato`,
			body: `${c.numero} · ${nombre}. Abre la app para ver el PDF firmado.`
		});
	}
	const diasDoc = Number(pref.diasDocumentos) || 20;
	if (now.getHours() >= 7 && now.getHours() < 21) for (const d of documentos.filter((x) => !x.borrado)) {
		const v = byId.get(d.vehiculoId);
		if (!v) continue;
		const st = estadoDoc(d, now, diasDoc);
		const etapa = etapaAviso(st.dias, diasDoc);
		if (!etapa) continue;
		const nombre = nombreDoc(d);
		const carro = `${vehicleLabel(v)}${v.placa ? ` (${v.placa})` : ""}`;
		add({
			clave: `doc:${d.id}:${d.vence}:${etapa}`,
			tag: `doc-${d.id}`,
			url: `/privado/#/flota/${v.id}/papeles`,
			title: st.dias < 0 ? `${nombre} vencido · ${vehicleLabel(v)}` : `${nombre}: ${diasTexto(st.dias).toLowerCase()}`,
			body: st.dias < 0 ? `${carro} · venció el ${dateLong(d.vence)}. Renuévalo antes de volver a rentarlo y carga el nuevo en la app.` : `${carro} · vence el ${dateLong(d.vence)}${d.entidad ? ` · ${d.entidad}` : ""}. Renuévalo a tiempo y actualiza la fecha en la app.`
		});
	}
	const [hh, mm] = String(pref.resumen || "07:00").split(":").map(Number);
	const hoy = startOfDay(now);
	if (now >= new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate(), hh || 7, mm || 0) && now.getHours() < 12) {
		const manana = addDays(hoy, 1);
		const enDia = (iso) => Date.parse(iso) >= +hoy && Date.parse(iso) < +manana;
		const vivos = lista.filter((c) => !["cancelado", "finalizado"].includes(c.estado));
		const entregas = vivos.filter((c) => c.estado !== "activo" && enDia(c.inicio)).length;
		const devoluciones = vivos.filter((c) => enDia(c.fin)).length;
		const estados = flota.map((v) => vehicleStatus(v, lista, t).estado);
		const fuera = estados.filter((e) => e === "en-renta" || e === "por-recibir").length;
		const atrasados = estados.filter((e) => e === "por-recibir").length;
		const r = revenue(lista, now, now);
		const agenda = entregas || devoluciones ? `Hoy: ${[entregas && plural(entregas, "entrega", "entregas"), devoluciones && plural(devoluciones, "devolución", "devoluciones")].filter(Boolean).join(" y ")}.` : "Hoy no hay entregas ni devoluciones.";
		const papeles = alertasDocs(documentos, flota, now, diasDoc);
		const vencidos = papeles.filter((x) => x.estado === "vencido").length;
		const papelesTxt = papeles.length ? ` Papeles: ${[vencidos && plural(vencidos, "vencido", "vencidos"), papeles.length - vencidos && `${papeles.length - vencidos} por vencer`].filter(Boolean).join(" y ")}.` : "";
		add({
			clave: `resumen:${ymd(now)}`,
			tag: "resumen",
			url: "/privado/#/inicio",
			title: `${greeting(now)}, ${ajustes.dueno || "Alejandro"}`,
			body: `${agenda} ${plural(fuera, "carro en renta", "carros en renta")}${atrasados ? ` (${plural(atrasados, "atrasado", "atrasados")})` : ""}. Generado en ${mes(now)}: ${money(r.mesALaFecha)}.${papelesTxt}`
		});
	}
	const badge = flota.map((v) => vehicleStatus(v, lista, t).estado).filter((e) => e === "en-renta" || e === "por-recibir").length;
	return out.map((a) => ({
		...a,
		badge
	}));
}
async function main() {
	let cfg = {};
	try {
		cfg = JSON.parse(process.env.B2_AVISOS || "{}");
	} catch {
		throw new Error("B2_AVISOS no es un JSON válido.");
	}
	if (!cfg.bucket) return console.log("La nube aún no está configurada: no hay avisos que enviar.");
	if (!process.env.VAPID_PRIVATE_KEY) throw new Error("Falta el secreto VAPID_PRIVATE_KEY.");
	if (!process.env.TZ) console.warn("Aviso: TZ no está definida; las horas se calculan con la zona del servidor.");
	const s3 = createS3(cfg);
	const get = async (k, fallback) => await s3.getJSON(k) ?? fallback;
	const [ajustes, contratosDoc, vehiculosDoc, documentosDoc, estado] = await Promise.all([
		get("datos/ajustes.json", {}),
		get("datos/contratos.json", {}),
		get("datos/vehiculos.json", {}),
		get("datos/documentos.json", {}),
		get(ESTADO, {})
	]);
	estado.enviados ||= {};
	estado.muertas ||= [];
	const subs = (ajustes.avisos?.suscripciones || []).filter((s) => s?.endpoint && !estado.muertas.includes(s.endpoint));
	if (!subs.length) return console.log("No hay ningún iPhone con las notificaciones activas.");
	const contratos = contratosDoc.registros || [];
	const firmados = /* @__PURE__ */ new Set();
	for (const c of live(contratos).filter((x) => x.firma?.estado === "enviado" && x.firma.token)) if (await s3.exists(`firmas/${c.firma.token}/firma.json`).catch(() => false)) firmados.add(c.id);
	const avisos = decidir({
		ajustes,
		contratos,
		vehiculos: vehiculosDoc.registros || [],
		documentos: documentosDoc.registros || [],
		firmados
	}, estado, /* @__PURE__ */ new Date());
	console.log(`${avisos.length} aviso(s) para ${subs.length} dispositivo(s).`);
	if (!avisos.length) return;
	webpush.setVapidDetails(`mailto:${config.email}`, config.prive.vapidPublicKey, process.env.VAPID_PRIVATE_KEY);
	for (const a of avisos) {
		let entregado = false;
		for (const s of subs) {
			if (estado.muertas.includes(s.endpoint)) continue;
			try {
				await webpush.sendNotification({
					endpoint: s.endpoint,
					keys: s.keys
				}, JSON.stringify({
					title: a.title,
					body: a.body,
					url: a.url,
					tag: a.tag,
					badge: a.badge
				}), {
					TTL: 14400,
					urgency: "high"
				});
				entregado = true;
			} catch (err) {
				if (err.statusCode === 404 || err.statusCode === 410) {
					estado.muertas.push(s.endpoint);
					console.log(`Suscripción vencida (${s.dispositivo || "dispositivo"}): no se vuelve a usar.`);
				} else console.error(`No se pudo enviar "${a.title}": ${err.statusCode || ""} ${err.body || err.message}`);
			}
		}
		if (entregado) {
			estado.enviados[a.clave] = (/* @__PURE__ */ new Date()).toISOString();
			console.log(`Enviado: ${a.title}`);
		}
	}
	const limite = Date.now() - GUARDAR_DIAS * 864e5;
	for (const [k, v] of Object.entries(estado.enviados)) if (Date.parse(v) < limite) delete estado.enviados[k];
	estado.actualizado = (/* @__PURE__ */ new Date()).toISOString();
	await s3.putJSON(ESTADO, estado);
}
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split("/").pop())) main().catch((err) => {
	console.error(err.message || err);
	process.exitCode = 1;
});
//#endregion
export { decidir };
