--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5 (Debian 11.5-1.pgdg90+1)
-- Dumped by pg_dump version 11.5

-- Started on 2019-10-22 05:36:32

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: eatmeall
--

ALTER SCHEMA public OWNER TO eatmeall;

--
-- TOC entry 2908 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: eatmeall
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 198 (class 1259 OID 16418)
-- Name: hibernate_sequences; Type: TABLE; Schema: public; Owner: eatmeall
--

CREATE TABLE public.hibernate_sequences (
    sequence_name character varying(255) NOT NULL,
    next_val bigint
);


ALTER TABLE public.hibernate_sequences OWNER TO eatmeall;

--
-- TOC entry 196 (class 1259 OID 16388)
-- Name: meal_entity; Type: TABLE; Schema: public; Owner: eatmeall
--

CREATE TABLE public.meal_entity (
    id bigint NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    version integer NOT NULL,
    author character varying(255),
    description character varying(255),
    name character varying(255)
);


ALTER TABLE public.meal_entity OWNER TO eatmeall;

--
-- TOC entry 199 (class 1259 OID 16423)
-- Name: meal_entity_meal_times; Type: TABLE; Schema: public; Owner: eatmeall
--

CREATE TABLE public.meal_entity_meal_times (
    meal_entity_id bigint NOT NULL,
    meal_times integer
);


ALTER TABLE public.meal_entity_meal_times OWNER TO eatmeall;

--
-- TOC entry 197 (class 1259 OID 16397)
-- Name: meal_prepare_step; Type: TABLE; Schema: public; Owner: eatmeall
--

CREATE TABLE public.meal_prepare_step (
    id bigint NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    version integer NOT NULL,
    order_number integer NOT NULL,
    step character varying(255),
    meal_id bigint
);


ALTER TABLE public.meal_prepare_step OWNER TO eatmeall;

--
-- TOC entry 200 (class 1259 OID 16426)
-- Name: meal_prepare_step_entity; Type: TABLE; Schema: public; Owner: eatmeall
--

CREATE TABLE public.meal_prepare_step_entity (
    id bigint NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    version integer NOT NULL,
    order_number integer NOT NULL,
    step character varying(255),
    meal_id bigint
);


ALTER TABLE public.meal_prepare_step_entity OWNER TO eatmeall;

--
-- TOC entry 201 (class 1259 OID 16431)
-- Name: meals; Type: TABLE; Schema: public; Owner: eatmeall
--

CREATE TABLE public.meals (
    id bigint NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    version integer NOT NULL,
    author character varying(255),
    description character varying(255),
    name character varying(255)
);


ALTER TABLE public.meals OWNER TO eatmeall;

--
-- TOC entry 202 (class 1259 OID 16439)
-- Name: products; Type: TABLE; Schema: public; Owner: eatmeall
--

CREATE TABLE public.products (
    id bigint NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    version integer NOT NULL,
    calorific double precision,
    carbohydrates double precision,
    fat double precision,
    name character varying(255),
    product_type integer,
    protein double precision,
    roughage double precision
);


ALTER TABLE public.products OWNER TO eatmeall;

--
-- TOC entry 203 (class 1259 OID 16444)
-- Name: r_meal_product; Type: TABLE; Schema: public; Owner: eatmeall
--

CREATE TABLE public.r_meal_product (
    amount integer,
	special_amount character varying(255),
    meal_id bigint NOT NULL,
    part_id bigint NOT NULL
);


ALTER TABLE public.r_meal_product OWNER TO eatmeall;

--
-- TOC entry 2769 (class 2606 OID 16422)
-- Name: hibernate_sequences hibernate_sequences_pkey; Type: CONSTRAINT; Schema: public; Owner: eatmeall
--

ALTER TABLE ONLY public.hibernate_sequences
    ADD CONSTRAINT hibernate_sequences_pkey PRIMARY KEY (sequence_name);


--
-- TOC entry 2771 (class 2606 OID 16430)
-- Name: meal_prepare_step_entity meal_prepare_step_entity_pkey; Type: CONSTRAINT; Schema: public; Owner: eatmeall
--

ALTER TABLE ONLY public.meal_prepare_step_entity
    ADD CONSTRAINT meal_prepare_step_entity_pkey PRIMARY KEY (id);


--
-- TOC entry 2773 (class 2606 OID 16438)
-- Name: meals meals_pkey; Type: CONSTRAINT; Schema: public; Owner: eatmeall
--

ALTER TABLE ONLY public.meals
    ADD CONSTRAINT meals_pkey PRIMARY KEY (id);


--
-- TOC entry 2775 (class 2606 OID 16443)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: eatmeall
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- TOC entry 2777 (class 2606 OID 16448)
-- Name: r_meal_product r_meal_product_pkey; Type: CONSTRAINT; Schema: public; Owner: eatmeall
--

ALTER TABLE ONLY public.r_meal_product
    ADD CONSTRAINT r_meal_product_pkey PRIMARY KEY (meal_id, part_id);


--
-- TOC entry 2778 (class 2606 OID 16449)
-- Name: meal_entity_meal_times fk7up78706a24il4hcxvs1lwykd; Type: FK CONSTRAINT; Schema: public; Owner: eatmeall
--

ALTER TABLE ONLY public.meal_entity_meal_times
    ADD CONSTRAINT fk7up78706a24il4hcxvs1lwykd FOREIGN KEY (meal_entity_id) REFERENCES public.meals(id);


--
-- TOC entry 2781 (class 2606 OID 16464)
-- Name: r_meal_product fkhdcek2p6b2x4accs9ihl88ihj; Type: FK CONSTRAINT; Schema: public; Owner: eatmeall
--

ALTER TABLE ONLY public.r_meal_product
    ADD CONSTRAINT fkhdcek2p6b2x4accs9ihl88ihj FOREIGN KEY (part_id) REFERENCES public.products(id);


--
-- TOC entry 2779 (class 2606 OID 16454)
-- Name: meal_prepare_step_entity fksgeeb8kcqh8yxukp2ipvyafj6; Type: FK CONSTRAINT; Schema: public; Owner: eatmeall
--

ALTER TABLE ONLY public.meal_prepare_step_entity
    ADD CONSTRAINT fksgeeb8kcqh8yxukp2ipvyafj6 FOREIGN KEY (meal_id) REFERENCES public.meals(id);


--
-- TOC entry 2780 (class 2606 OID 16459)
-- Name: r_meal_product fksvift4tocvxs1e37ypp21l2mv; Type: FK CONSTRAINT; Schema: public; Owner: eatmeall
--

ALTER TABLE ONLY public.r_meal_product
    ADD CONSTRAINT fksvift4tocvxs1e37ypp21l2mv FOREIGN KEY (meal_id) REFERENCES public.meals(id);


-- Completed on 2019-10-22 05:36:32

--
-- PostgreSQL database dump complete
--





ALTER TABLE public.products OWNER TO eatmeall;

INSERT INTO public.products(
	id, created_at, updated_at, version, calorific, carbohydrates, fat, name, protein, roughage, product_type)
 VALUES (	1	, current_timestamp, current_timestamp,0,	283.00	,	59.20	,	1.70	,'Bagietki francuskie'	,	8.70	,	2.00	,	1	),
(	2	, current_timestamp, current_timestamp,0,	341.00	,	59.80	,	7.50	,'Bułeczki do hot-dogów'	,	9.50	,	1.80	,	1	),
(	3	, current_timestamp, current_timestamp,0,	347.00	,	77.60	,	1.90	        ,'Bułka tarta'	,	9.70	,	6.10	,	1	),
(	4	, current_timestamp, current_timestamp,0,	252.00	,	56.10	,	1.70	        ,'Bułki grahamki'	,	9.00	,	6.70	,	1	),
(	5	, current_timestamp, current_timestamp,0,	327.00	,	61.00	,	5.90	        ,'Bułki i rogale maślane'	,	8.50	,	1.80	,	1	),
(	6	, current_timestamp, current_timestamp,0,	284.00	,	58.40	,	3.50	        ,'Bułki mieszane, z cebulą'	,	7.90	,	4.00	,	1	),
(	7	, current_timestamp, current_timestamp,0,	314.00	,	60.30	,	4.50	        ,'Bułki mleczne'	,	9.20	,	2.00	,	1	),
(	8	, current_timestamp, current_timestamp,0,	304.00	,	58.40	,	4.50	        ,'Bułki owsiane'	,	9.30	,	2.60	,	1	),
(	9	, current_timestamp, current_timestamp,0,	273.00	,	57.70	,	1.50	        ,'Bułki pszenne zwykłe'	,	8.10	,	1.80	,	1	),
(	10	, current_timestamp, current_timestamp,0,	277.00	,	58.00	,	1.60	        ,'Bułki pszenne zwykłe, z serwatką'	,	8.80	,	2.10	,	1	),
(	11	, current_timestamp, current_timestamp,0,	315.00	,	61.10	,	4.00	        ,'Bułki sojowe'	,	10.10	,	2.30	,	1	),
(	12	, current_timestamp, current_timestamp,0,	272.00	,	58.80	,	1.30	        ,'Bułki szwedki'	,	7.60	,	2.40	,	1	),
(	13	, current_timestamp, current_timestamp,0,	294.00	,	56.60	,	4.40	        ,'Bułki wrocławskie'	,	8.00	,	1.80	,	1	),
(	14	, current_timestamp, current_timestamp,0,	333.00	,	60.80	,	7.00	        ,'Chałki zdobne'	,	7.80	,	1.80	,	1	),
(	15	, current_timestamp, current_timestamp,0,	251.00	,	54.80	,	1.50	        ,'Chleb baltonowski'	,	7.00	,	3.30	,	1	),
(	16	, current_timestamp, current_timestamp,0,	248.00	,	55.70	,	1.70	        ,'Chleb beskidzki'	,	7.50	,	5.80	,	1	),
(	17	, current_timestamp, current_timestamp,0,	353.00	,	78.90	,	2.40	        ,'Chleb chrupki'	,	8.70	,	6.00	,	1	),
(	18	, current_timestamp, current_timestamp,0,	381.00	,	78.30	,	5.20	        ,'Chleb ekstrudowany pszenny'	,	9.20	,	5.00	,	1	),
(	19	, current_timestamp, current_timestamp,0,	383.00	,	78.60	,	6.10	        ,'Chleb ekstrudowany żytni'	,	8.20	,	5.80	,	1	),
(	20	, current_timestamp, current_timestamp,0,	221.00	,	48.70	,	1.70	        ,'Chleb graham'	,	8.30	,	6.40	,	1	),
(	21	, current_timestamp, current_timestamp,0,	254.00	,	55.00	,	1.40	        ,'Chleb mazowiecki'	,	7.60	,	3.20	,	1	),
(	22	, current_timestamp, current_timestamp,0,	261.00	,	58.60	,	1.40	        ,'Chleb mieszany jasny, rodzynkowy'	,	5.80	,	3.10	,	1	),
(	23	, current_timestamp, current_timestamp,0,	259.00	,	54.20	,	3.60	        ,'Chleb mieszany pytlowy, z cebulą'	,	5.70	,	4.10	,	1	),
(	24	, current_timestamp, current_timestamp,0,	247.00	,	51.40	,	3.90	        ,'Chleb mieszany razowy, z bakaliami'	,	7.20	,	6.30	,	1	),
(	25	, current_timestamp, current_timestamp,0,	242.00	,	50.50	,	3.00	        ,'Chleb mieszany sitkowy, z ziarnami'	,	8.00	,	5.40	,	1	),
(	26	, current_timestamp, current_timestamp,0,	240.00	,	48.90	,	4.50	        ,'Chleb mieszany, słonecznikowy'	,	6.80	,	6.40	,	1	),
(	27	, current_timestamp, current_timestamp,0,	238.00	,	54.20	,	2.30	        ,'Chleb mieszany, z płatkami owsianymi'	,	7.00	,	7.70	,	1	),
(	28	, current_timestamp, current_timestamp,0,	226.00	,	49.20	,	2.70	        ,'Chleb mieszany, z soją'	,	7.10	,	6.60	,	1	),
(	29	, current_timestamp, current_timestamp,0,	256.00	,	55.30	,	1.50	        ,'Chleb mleczny'	,	7.70	,	3.20	,	1	),
(	30	, current_timestamp, current_timestamp,0,	248.00	,	55.30	,	1.30	        ,'Chleb nałęczowski'	,	6.60	,	3.70	,	1	),
(	31	, current_timestamp, current_timestamp,0,	247.00	,	54.50	,	2.10	        ,'Chleb poleski'	,	7.10	,	5.50	,	1	),
(	32	, current_timestamp, current_timestamp,0,	248.00	,	55.30	,	1.30	        ,'Chleb praski'	,	6.60	,	3.70	,	1	),
(	33	, current_timestamp, current_timestamp,0,	257.00	,	54.30	,	1.40	        ,'Chleb pszenny'	,	8.50	,	2.70	,	1	),
(	34	, current_timestamp, current_timestamp,0,	262.00	,	48.00	,	4.50	        ,'Chleb pszenny tostowy'	,	7.40	,	3.60	,	1	),
(	35	, current_timestamp, current_timestamp,0,	223.00	,	49.50	,	1.80	        ,'Chleb pszenny, z ziarnem pszenicy'	,	8.30	,	6.80	,	1	),
(	36	, current_timestamp, current_timestamp,0,	245.00	,	54.00	,	1.30	        ,'Chleb wiejski'	,	6.90	,	3.50	,	1	),
(	37	, current_timestamp, current_timestamp,0,	254.00	,	56.60	,	1.50	        ,'Chleb wielkopolski'	,	6.70	,	4.10	,	1	),
(	38	, current_timestamp, current_timestamp,0,	261.00	,	56.90	,	1.50	        ,'Chleb zakopiański'	,	7.70	,	3.70	,	1	),
(	39	, current_timestamp, current_timestamp,0,	248.00	,	56.30	,	1.30	        ,'Chleb zwykły'	,	6.10	,	4.20	,	1	),
(	40	, current_timestamp, current_timestamp,0,	243.00	,	57.40	,	1.30	        ,'Chleb żytni jasny'	,	3.80	,	4.10	,	1	),
(	41	, current_timestamp, current_timestamp,0,	258.00	,	59.10	,	1.80	        ,'chleb żytni jasny mleczny'	,	4.60	,	4.10	,	1	),
(	42	, current_timestamp, current_timestamp,0,	207.00	,	42.10	,	1.50	        ,'Chleb żytni mieszany z otrębami'	,	6.30	,	7.40	,	1	),
(	43	, current_timestamp, current_timestamp,0,	225.00	,	53.80	,	1.80	        ,'Chleb żytni pełnoziarnisty'	,	6.80	,	9.10	,	1	),
(	44	, current_timestamp, current_timestamp,0,	240.00	,	56.20	,	1.50	        ,'Chleb żytni pytlowy'	,	4.40	,	4.90	,	1	),
(	45	, current_timestamp, current_timestamp,0,	213.00	,	51.20	,	1.70	        ,'Chleb żytni razowy'	,	5.90	,	8.40	,	1	),
(	46	, current_timestamp, current_timestamp,0,	224.00	,	52.60	,	1.70	        ,'Chleb żytni razowy litewski'	,	6.60	,	7.80	,	1	),
(	47	, current_timestamp, current_timestamp,0,	225.00	,	54.00	,	1.60	        ,'Chleb żytni razowy na miodzie'	,	5.60	,	7.80	,	1	),
(	48	, current_timestamp, current_timestamp,0,	217.00	,	50.80	,	1.70	        ,'Chleb żytni razowy wytrawny'	,	7.00	,	8.00	,	1	),
(	49	, current_timestamp, current_timestamp,0,	226.00	,	48.70	,	3.50	        ,'Chleb żytni razowy z soją i słonecznikiem'	,	7.80	,	8.40	,	1	),
(	50	, current_timestamp, current_timestamp,0,	228.00	,	54.30	,	1.60	        ,'Chleb żytni razowy, ze śliwką'	,	5.30	,	7.00	,	1	),
(	51	, current_timestamp, current_timestamp,0,	220.00	,	53.00	,	1.50	        ,'Chleb żytni sitkowy'	,	5.40	,	7.40	,	1	),
(	52	, current_timestamp, current_timestamp,0,	225.00	,	52.10	,	1.40	        ,'Chleb żytni staropolski'	,	4.50	,	4.20	,	1	),
(	53	, current_timestamp, current_timestamp,0,	195.00	,	38.80	,	1.20	        ,'Chleb żytni śrutowy i pełnoziarnisty'	,	7.30	,	8.10	,	1	),
(	54	, current_timestamp, current_timestamp,0,	218.00	,	52.20	,	1.50	        ,'Chleb żytni wileński'	,	4.40	,	6.30	,	1	),
(	55	, current_timestamp, current_timestamp,0,	352.00	,	78.90	,	3.00	        ,'Chrupki kukurydziane'	,	8.90	,	7.60	,	1	),
(	56	, current_timestamp, current_timestamp,0,	298.00	,	58.70	,	3.60	        ,'Ciabatta'	,	8.70	,	2.00	,	1	),
(	57	, current_timestamp, current_timestamp,0,	296.00	,	58.60	,	3.60	        ,'Kajzerki'	,	8.40	,	1.90	,	1	),
(	58	, current_timestamp, current_timestamp,0,	336.00	,	69.30	,	3.10	        ,'Kasza gryczana'	,	12.60	,	5.90	,	1	),
(	59	, current_timestamp, current_timestamp,0,	346.00	,	71.60	,	2.90	        ,'Kasza jaglana'	,	10.50	,	3.20	,	1	),
(	60	, current_timestamp, current_timestamp,0,	327.00	,	75.00	,	2.20	        ,'Kasza jęczmienna, perłowa'	,	6.90	,	6.20	,	1	),
(	61	, current_timestamp, current_timestamp,0,	334.00	,	74.90	,	2.00	        ,'Kasza jęczmienna, pęczak'	,	8.40	,	5.40	,	1	),
(	62	, current_timestamp, current_timestamp,0,	348.00	,	76.70	,	1.30	        ,'Kasza manna'	,	8.70	,	2.50	,	1	),
(	63	, current_timestamp, current_timestamp,0,	326.00	,	55.70	,	7.10	        ,'Kasza owsiana'	,	9.90	,	9.70	,	1	),
(	64	, current_timestamp, current_timestamp,0,	356.00	,	68.70	,	1.20	        ,'Kuskus'	,	14.20	,	4.20	,	1	),
(	65	, current_timestamp, current_timestamp,0,	301.00	,	74.00	,	2.20	        ,'Maka żytnia, typ 2000'	,	8.10	,	12.80	,	1	),
(	66	, current_timestamp, current_timestamp,0,	364.00	,	77.60	,	1.60	        ,'Makaron bezjajeczny'	,	11.00	,	2.40	,	1	),
(	67	, current_timestamp, current_timestamp,0,	367.00	,	79.40	,	1.40	        ,'Makaron bezjajeczny z semoliny'	,	10.70	,	2.80	,	1	),
(	68	, current_timestamp, current_timestamp,0,	391.00	,	78.30	,	3.40	        ,'Makaron czterojajeczny'	,	13.20	,	2.60	,	1	),
(	69	, current_timestamp, current_timestamp,0,	373.00	,	76.80	,	2.60	        ,'Makaron dwujajeczny'	,	12.00	,	2.60	,	1	),
(	70	, current_timestamp, current_timestamp,0,	374.00	,	77.80	,	2.40	        ,'Makaron dwujajeczny z semoliny'	,	11.90	,	2.90	,	1	),
(	71	, current_timestamp, current_timestamp,0,	343.00	,	64.00	,	3.00	        ,'Makaron pełnoziarnisty'	,	15.00	,	8.00	,	1	),
(	72	, current_timestamp, current_timestamp,0,	354.00	,	70.70	,	2.70	        ,'Mąka gryczana pełna'	,	11.70	,	3.70	,	1	),
(	73	, current_timestamp, current_timestamp,0,	338.00	,	64.70	,	3.00	        ,'Mąka jęczmienna'	,	9.20	,	7.60	,	1	),
(	74	, current_timestamp, current_timestamp,0,	348.00	,	72.00	,	1.90	        ,'Mąka jęczmienna pełnoziarnista'	,	10.60	,	NULL	,	1	),
(	75	, current_timestamp, current_timestamp,0,	337.00	,	78.00	,	3.00	        ,'Mąka kukurydziana'	,	5.90	,	7.50	,	1	),
(	76	, current_timestamp, current_timestamp,0,	348.00	,	72.70	,	1.80	        ,'Mąka orkiszowa'	,	13.40	,	8.20	,	1	),
(	77	, current_timestamp, current_timestamp,0,	363.00	,	68.10	,	5.90	        ,'Mąka owsiana'	,	12.90	,	7.20	,	1	),
(	78	, current_timestamp, current_timestamp,0,	309.00	,	70.00	,	2.30	        ,'Mąka pszenna, typ 1850'	,	11.90	,	10.80	,	1	),
(	79	, current_timestamp, current_timestamp,0,	343.00	,	74.00	,	1.20	        ,'Mąka pszenna, typ 500'	,	10.10	,	2.30	,	1	),
(	80	, current_timestamp, current_timestamp,0,	344.00	,	73.00	,	1.60	        ,'Mąka pszenna, typ 550'	,	10.50	,	2.20	,	1	),
(	81	, current_timestamp, current_timestamp,0,	341.00	,	71.30	,	1.80	        ,'Mąka pszenna, typ 750'	,	11.60	,	2.90	,	1	),
(	82	, current_timestamp, current_timestamp,0,	348.00	,	79.20	,	0.70	        ,'Mąka ryżowa'	,	7.20	,	2.30	,	1	),
(	83	, current_timestamp, current_timestamp,0,	354.00	,	73.70	,	1.20	        ,'Mąka z pszenicy durum'	,	12.30	,	2.70	,	1	),
(	84	, current_timestamp, current_timestamp,0,	310.00	,	75.30	,	2.20	        ,'Mąka żytnia, typ 1400'	,	7.10	,	11.00	,	1	),
(	85	, current_timestamp, current_timestamp,0,	330.00	,	78.50	,	1.50	        ,'Mąka żytnia, typ 580'	,	5.10	,	5.60	,	1	),
(	86	, current_timestamp, current_timestamp,0,	327.00	,	77.40	,	1.70	        ,'Mąka żytnia, typ 720'	,	5.90	,	6.40	,	1	),
(	87	, current_timestamp, current_timestamp,0,	399.00	,	63.80	,	11.50	        ,'Müsli czekoladowe'	,	10.00	,	7.00	,	1	),
(	88	, current_timestamp, current_timestamp,0,	363.00	,	60.20	,	8.80	        ,'Müsli owocowe bez cukru'	,	10.70	,	7.70	,	1	),
(	89	, current_timestamp, current_timestamp,0,	325.00	,	72.20	,	3.40	        ,'Müsli z owocami suszonymi'	,	8.40	,	8.00	,	1	),
(	90	, current_timestamp, current_timestamp,0,	375.00	,	62.90	,	12.70	        ,'Müsli z rodzynkami i orzechami'	,	11.50	,	9.70	,	1	),
(	91	, current_timestamp, current_timestamp,0,	362.00	,	70.70	,	4.10	        ,'Orkisz'	,	15.40	,	9.50	,	1	),
(	92	, current_timestamp, current_timestamp,0,	185.00	,	61.90	,	4.60	        ,'Otręby pszenne'	,	16.00	,	42.40	,	1	),
(	93	, current_timestamp, current_timestamp,0,	176.00	,	16.30	,	4.30	        ,'Otręby żytnie'	,	18.00	,	47.50	,	1	),
(	94	, current_timestamp, current_timestamp,0,	305.00	,	58.80	,	4.70	        ,'Pieczywo tostowe'	,	8.10	,	2.10	,	1	),
(	95	, current_timestamp, current_timestamp,0,	273.00	,	53.80	,	4.20	        ,'Pieczywo tostowe, grahamowe'	,	7.50	,	3.30	,	1	),
(	96	, current_timestamp, current_timestamp,0,	355.00	,	79.40	,	3.60	        ,'Płatki jęczmienne'	,	9.80	,	9.60	,	1	),
(	97	, current_timestamp, current_timestamp,0,	363.00	,	83.60	,	2.50	        ,'Płatki kukurydziane'	,	6.90	,	6.60	,	1	),
(	98	, current_timestamp, current_timestamp,0,	387.00	,	82.60	,	5.10	        ,'Płatki kukurydziane z miodem i orzechami'	,	6.40	,	4.80	,	1	),
(	99	, current_timestamp, current_timestamp,0,	243.00	,	42.00	,	3.00	        ,'Płatki otrębowe, słodzone cukrem'	,	12.00	,	33.00	,	1	),
(	100	, current_timestamp, current_timestamp,0,	366.00	,	69.30	,	7.20	        ,'Płatki owsiane'	,	11.90	,	6.90	,	1	),
(	101	, current_timestamp, current_timestamp,0,	351.00	,	81.00	,	3.00	        ,'Płatki pszenne'	,	9.00	,	10.10	,	1	),
(	102	, current_timestamp, current_timestamp,0,	343.00	,	82.60	,	3.20	        ,'Płatki żytnie'	,	6.40	,	11.60	,	1	),
(	103	, current_timestamp, current_timestamp,0,	372.00	,	71.20	,	4.40	        ,'Proso'	,	13.60	,	3.50	,	1	),
(	104	, current_timestamp, current_timestamp,0,	240.00	,	58.20	,	2.00	        ,'Pumpernikiel'	,	5.90	,	9.40	,	1	),
(	105	, current_timestamp, current_timestamp,0,	335.00	,	58.50	,	5.00	        ,'Quinoa'	,	13.80	,	6.60	,	1	),
(	106	, current_timestamp, current_timestamp,0,	344.00	,	78.90	,	0.70	        ,'Ryż biały'	,	6.70	,	2.40	,	1	),
(	107	, current_timestamp, current_timestamp,0,	322.00	,	76.80	,	1.90	        ,'Ryż brązowy'	,	7.10	,	8.70	,	1	),
(	108	, current_timestamp, current_timestamp,0,	338.00	,	73.00	,	2.00	        ,'Ryż dziki'	,	7.00	,	3.00	,	1	),
(	109	, current_timestamp, current_timestamp,0,	361.00	,	84.10	,	1.60	        ,'Ryż preparowany'	,	6.30	,	5.00	,	1	),
(	110	, current_timestamp, current_timestamp,0,	346.00	,	75.00	,	1.30	        ,'Semolina'	,	10.10	,	2.80	,	1	),
(	111	, current_timestamp, current_timestamp,0,	353.00	,	88.50	,	0.00	        ,'Skrobia kukurydziana'	,	0.20	,	1.70	,	1	),
(	112	, current_timestamp, current_timestamp,0,	345.00	,	85.40	,	0.20	        ,'Skrobia pszeniczna'	,	0.50	,	0.20	,	1	),
(	113	, current_timestamp, current_timestamp,0,	350.00	,	84.40	,	0.40	        ,'Skrobia ryżowa'	,	0.90	,	0.00	,	1	),
(	114	, current_timestamp, current_timestamp,0,	226.00	,	45.30	,	1.80	        ,'Słone precelki'	,	7.10	,	1.90	,	1	),
(	115	, current_timestamp, current_timestamp,0,	322.00	,	67.40	,	2.80	        ,'Strucle tureckie'	,	7.70	,	1.90	,	1	),
(	116	, current_timestamp, current_timestamp,0,	303.00	,	56.90	,	4.80	        ,'Stucle wrocławskie'	,	8.90	,	1.70	,	1	),
(	117	, current_timestamp, current_timestamp,0,	370.00	,	56.80	,	8.80	        ,'Szarłat (Amarantus)'	,	15.80	,	NULL	,	1	),
(	118	, current_timestamp, current_timestamp,0,	323.00	,	45.50	,	9.40	        ,'Zarodki pszenne'	,	27.50	,	14.00	,	1	),
(	119	, current_timestamp, current_timestamp,0,	306.00	,	70.50	,	2.40	        ,'Ziarno pszenicy'	,	11.10	,	11.50	,	1	),
(	120	, current_timestamp, current_timestamp,0,	301.00	,	74.20	,	2.20	        ,'Ziarno żyta'	,	7.90	,	12.90	,	1	),
(	121	, current_timestamp, current_timestamp,0,	134.00	,	23.90	,	3.00	        ,'Deser mleczny, ryżowo-jabłkowy'	,	2.80	,	0.30	,	2	),
(	122	, current_timestamp, current_timestamp,0,	133.00	,	23.50	,	2.90	        ,'Deser mleczny, ryżowo-waniliowy'	,	3.00	,	0.20	,	2	),
(	123	, current_timestamp, current_timestamp,0,	70.00	,	10.40	,	1.50	        ,'Jogurt bananowy, 1,5% tłuszczu'	,	3.70	,	0.20	,	2	),
(	124	, current_timestamp, current_timestamp,0,	62.00	,	8.80	,	1.50	        ,'Jogurt jagodowy, 1,5% tłuszczu'	,	3.70	,	0.40	,	2	),
(	125	, current_timestamp, current_timestamp,0,	63.00	,	8.90	,	1.50	        ,'Jogurt morelowy, 1,5% tłuszczu'	,	3.70	,	0.30	,	2	),
(	126	, current_timestamp, current_timestamp,0,	60.00	,	6.20	,	2.00	        ,'Jogurt naturalny, 2% tłuszczu'	,	4.30	,	0.00	,	2	),
(	127	, current_timestamp, current_timestamp,0,	60.00	,	8.20	,	1.50	        ,'Jogurt truskawkowy, 1,5% tłuszczu'	,	3.60	,	0.30	,	2	),
(	128	, current_timestamp, current_timestamp,0,	61.00	,	8.20	,	1.50	        ,'Jogurt wiśniowy, 1,5% tłuszczu'	,	3.70	,	0.10	,	2	),
(	129	, current_timestamp, current_timestamp,0,	51.00	,	4.70	,	2.00	        ,'Kefir, 2% tłuszczu'	,	3.40	,	0.00	,	2	),
(	130	, current_timestamp, current_timestamp,0,	37.00	,	4.70	,	0.50	        ,'Maślanka spożywcza, 0,5% tłuszczu'	,	3.40	,	0.00	,	2	),
(	131	, current_timestamp, current_timestamp,0,	47.00	,	6.20	,	1.50	        ,'Mleko klaczy'	,	2.20	,	0.00	,	2	),
(	132	, current_timestamp, current_timestamp,0,	72.00	,	7.00	,	4.30	        ,'Mleko kobiece'	,	1.30	,	0.00	,	2	),
(	133	, current_timestamp, current_timestamp,0,	68.00	,	4.50	,	4.10	        ,'Mleko kozie'	,	3.20	,	0.00	,	2	),
(	134	, current_timestamp, current_timestamp,0,	360.00	,	51.20	,	0.80	        ,'Mleko odtłuszczone, w proszku'	,	35.70	,	0.00	,	2	),
(	135	, current_timestamp, current_timestamp,0,	107.00	,	5.10	,	7.00	        ,'Mleko owcze'	,	6.00	,	0.00	,	2	),
(	136	, current_timestamp, current_timestamp,0,	479.00	,	38.70	,	24.00	        ,'Mleko pełne, w proszku'	,	27.00	,	0.00	,	2	),
(	137	, current_timestamp, current_timestamp,0,	53.00	,	5.80	,	1.80	        ,'Mleko sojowe'	,	3.50	,	0.00	,	2	),
(	138	, current_timestamp, current_timestamp,0,	39.00	,	5.10	,	0.50	        ,'Mleko spożywcze, 0,5% tłuszczu'	,	3.50	,	0.00	,	2	),
(	139	, current_timestamp, current_timestamp,0,	47.00	,	5.00	,	1.50	        ,'Mleko spożywcze, 1,5% tłuszczu'	,	3.40	,	0.00	,	2	),
(	140	, current_timestamp, current_timestamp,0,	51.00	,	4.90	,	2.00	        ,'Mleko spożywcze, 2% tłuszczu'	,	3.40	,	0.00	,	2	),
(	141	, current_timestamp, current_timestamp,0,	61.00	,	4.80	,	3.20	        ,'Mleko spożywcze, 3,2% tłuszczu'	,	3.30	,	0.00	,	2	),
(	142	, current_timestamp, current_timestamp,0,	64.00	,	4.80	,	3.50	        ,'Mleko spożywcze, 3,5% tłuszczu'	,	3.30	,	0.00	,	2	),
(	143	, current_timestamp, current_timestamp,0,	131.00	,	9.40	,	7.50	        ,'Mleko zagęszczone, niesłodzone'	,	6.60	,	0.00	,	2	),
(	144	, current_timestamp, current_timestamp,0,	326.00	,	55.30	,	8.00	        ,'Mleko zagęszczone, słodzone'	,	7.50	,	0.00	,	2	),
(	145	, current_timestamp, current_timestamp,0,	82.00	,	12.10	,	1.90	        ,'Napój mleczny jogurtowy'	,	4.00	,	0.00	,	2	),
(	146	, current_timestamp, current_timestamp,0,	81.00	,	12.10	,	2.10	        ,'Napój mleczny kawowy'	,	3.30	,	0.10	,	2	),
(	147	, current_timestamp, current_timestamp,0,	386.00	,	NULL	,	31.60	        ,'Ser Appenzeller, 50% tłuszczu'	,	25.40	,	0.00	,	2	),
(	148	, current_timestamp, current_timestamp,0,	229.00	,	NULL	,	17.00	        ,'Ser Back-Camembert, 45% tłuszczu'	,	19.00	,	0.00	,	2	),
(	149	, current_timestamp, current_timestamp,0,	413.00	,	NULL	,	40.00	        ,'Ser Bavaria Blue, 70% tłuszczu'	,	13.20	,	0.00	,	2	),
(	150	, current_timestamp, current_timestamp,0,	373.00	,	NULL	,	30.20	        ,'Ser Bel Paese'	,	25.40	,	0.00	,	2	),
(	151	, current_timestamp, current_timestamp,0,	358.00	,	NULL	,	29.60	        ,'Ser Bleu d’Auvergne, 50% tłuszczu'	,	22.90	,	0.00	,	2	),
(	152	, current_timestamp, current_timestamp,0,	358.00	,	NULL	,	29.60	        ,'Ser Bleu de Bresse, 50% tłuszczu'	,	22.90	,	0.00	,	2	),
(	153	, current_timestamp, current_timestamp,0,	413.00	,	NULL	,	40.00	        ,'Ser Cambozola, 70% tłuszczu'	,	13.20	,	0.00	,	2	),
(	154	, current_timestamp, current_timestamp,0,	334.00	,	1.00	,	24.90	        ,'Ser Edamski wędzony'	,	26.40	,	0.00	,	2	),
(	155	, current_timestamp, current_timestamp,0,	325.00	,	NULL	,	25.40	        ,'Ser Favorel, Danbo, 45% tłuszczu'	,	24.10	,	0.00	,	2	),
(	156	, current_timestamp, current_timestamp,0,	360.00	,	NULL	,	31.20	        ,'Ser Gorgonzola'	,	19.40	,	0.00	,	2	),
(	157	, current_timestamp, current_timestamp,0,	399.00	,	NULL	,	32.10	        ,'Ser Gruyère, 45% tłuszczu'	,	26.90	,	0.00	,	2	),
(	158	, current_timestamp, current_timestamp,0,	126.00	,	NULL	,	0.70	        ,'Ser Herceński, moguncki'	,	30.00	,	0.00	,	2	),
(	159	, current_timestamp, current_timestamp,0,	349.00	,	NULL	,	26.90	        ,'Ser Jarlsberg, 45% tłuszczu'	,	26.70	,	0.00	,	2	),
(	160	, current_timestamp, current_timestamp,0,	280.00	,	NULL	,	21.80	        ,'Ser kozi miękki, 45% tłuszczu'	,	21.00	,	0.00	,	2	),
(	161	, current_timestamp, current_timestamp,0,	329.00	,	NULL	,	27.00	        ,'Ser kozi w plasterkach, 48% tłuszczu'	,	21.60	,	0.00	,	2	),
(	162	, current_timestamp, current_timestamp,0,	352.00	,	NULL	,	27.60	        ,'Ser Leerdamski, 45% tłuszczu'	,	25.90	,	0.00	,	2	),
(	163	, current_timestamp, current_timestamp,0,	184.00	,	NULL	,	8.60	        ,'Ser Limburski, 20% tłuszczu'	,	26.40	,	0.00	,	2	),
(	164	, current_timestamp, current_timestamp,0,	268.00	,	NULL	,	19.70	        ,'Ser Limburski, 40% tłuszczu'	,	22.40	,	0.00	,	2	),
(	165	, current_timestamp, current_timestamp,0,	286.00	,	NULL	,	18.00	        ,'Ser Lindenberski lekki, 30% tłuszczu'	,	31.00	,	0.00	,	2	),
(	166	, current_timestamp, current_timestamp,0,	386.00	,	NULL	,	30.00	        ,'Ser Lindenberski, 45% tłuszczu'	,	28.90	,	0.00	,	2	),
(	167	, current_timestamp, current_timestamp,0,	355.00	,	NULL	,	29.60	        ,'Ser Maaslandzki, 50% tłuszczu'	,	22.20	,	0.00	,	2	),
(	168	, current_timestamp, current_timestamp,0,	460.00	,	3.60	,	47.50	        ,'Ser Mascarpone'	,	4.60	,	0.00	,	2	),
(	169	, current_timestamp, current_timestamp,0,	366.00	,	NULL	,	33.20	        ,'Ser miękki z zielonym pieprzem, 60% tłuszczu'	,	16.80	,	0.00	,	2	),
(	170	, current_timestamp, current_timestamp,0,	297.00	,	NULL	,	22.40	        ,'Ser Moorbier, 40% tłuszczu'	,	23.80	,	0.00	,	2	),
(	171	, current_timestamp, current_timestamp,0,	314.00	,	1.70	,	25.40	        ,'Ser owczy, Bryndza'	,	20.50	,	0.00	,	2	),
(	172	, current_timestamp, current_timestamp,0,	356.00	,	NULL	,	29.60	        ,'Ser Pirenejski, 50% tłuszczu'	,	22.30	,	0.00	,	2	),
(	173	, current_timestamp, current_timestamp,0,	355.00	,	NULL	,	29.80	        ,'Ser Pleśniowy, 60% tłuszczu'	,	21.10	,	0.00	,	2	),
(	174	, current_timestamp, current_timestamp,0,	365.00	,	NULL	,	28.90	        ,'Ser Provolone'	,	26.30	,	0.00	,	2	),
(	175	, current_timestamp, current_timestamp,0,	343.00	,	NULL	,	28.00	        ,'Ser Raclette, 48% tłuszczu'	,	22.70	,	0.00	,	2	),
(	176	, current_timestamp, current_timestamp,0,	333.00	,	1.90	,	33.00	        ,'Ser Robiola, 75% tłuszczu'	,	7.00	,	0.00	,	2	),
(	177	, current_timestamp, current_timestamp,0,	187.00	,	NULL	,	9.00	        ,'Ser Romadur, 20% tłuszczu'	,	26.40	,	0.00	,	2	),
(	178	, current_timestamp, current_timestamp,0,	226.00	,	NULL	,	14.10	        ,'Ser Romadur, 30% tłuszczu'	,	24.80	,	0.00	,	2	),
(	179	, current_timestamp, current_timestamp,0,	386.00	,	NULL	,	32.00	        ,'Ser Tête de Moine, 50% tłuszczu'	,	24.50	,	0.00	,	2	),
(	180	, current_timestamp, current_timestamp,0,	99.00	,	3.50	,	0.50	        ,'Ser twarogowy chudy'	,	19.80	,	0.00	,	2	),
(	181	, current_timestamp, current_timestamp,0,	133.00	,	3.70	,	4.70	        ,'Ser twarogowy półtłusty'	,	18.70	,	0.00	,	2	),
(	182	, current_timestamp, current_timestamp,0,	175.00	,	3.50	,	10.10	        ,'Ser twarogowy tłusty'	,	17.70	,	0.00	,	2	),
(	183	, current_timestamp, current_timestamp,0,	215.00	,	1.00	,	16.00	        ,'Ser typu „Feta”'	,	17.00	,	0.00	,	2	),
(	184	, current_timestamp, current_timestamp,0,	345.00	,	1.30	,	28.90	        ,'Ser typu Roqefort (Niva)'	,	20.00	,	0.00	,	2	),
(	185	, current_timestamp, current_timestamp,0,	352.00	,	NULL	,	27.60	        ,'Ser Westberski, 45% tłuszczu'	,	25.90	,	0.00	,	2	),
(	186	, current_timestamp, current_timestamp,0,	329.00	,	0.20	,	28.00	        ,'Ser, Brie pełnotłusty'	,	19.80	,	0.00	,	2	),
(	187	, current_timestamp, current_timestamp,0,	291.00	,	0.20	,	23.00	        ,'Ser, Camembert pełnotłusty'	,	21.40	,	0.00	,	2	),
(	188	, current_timestamp, current_timestamp,0,	391.00	,	0.10	,	31.70	        ,'Ser, Cheddar pełnotłusty'	,	27.10	,	0.00	,	2	),
(	189	, current_timestamp, current_timestamp,0,	313.00	,	0.10	,	23.40	        ,'Ser, Edamski tłusty'	,	26.10	,	0.00	,	2	),
(	190	, current_timestamp, current_timestamp,0,	380.00	,	0.10	,	29.70	        ,'Ser, Ementaler pełnotłusty'	,	28.80	,	0.00	,	2	),
(	191	, current_timestamp, current_timestamp,0,	316.00	,	0.10	,	22.90	        ,'Ser, Gouda tłusty'	,	27.90	,	0.00	,	2	),
(	192	, current_timestamp, current_timestamp,0,	346.00	,	0.10	,	27.40	        ,'Ser, Myśliwski pełnotłusty'	,	25.50	,	0.00	,	2	),
(	193	, current_timestamp, current_timestamp,0,	338.00	,	0.10	,	24.90	        ,'Ser, Myśliwski tłusty'	,	29.00	,	0.00	,	2	),
(	194	, current_timestamp, current_timestamp,0,	452.00	,	0.10	,	32.00	        ,'Ser, Parmezan'	,	41.50	,	0.00	,	2	),
(	195	, current_timestamp, current_timestamp,0,	363.00	,	0.10	,	30.60	        ,'Ser, Rokpol pełnotłusty'	,	22.60	,	0.00	,	2	),
(	196	, current_timestamp, current_timestamp,0,	351.00	,	0.10	,	28.10	        ,'Ser, Salami pełnotłusty'	,	25.20	,	0.00	,	2	),
(	197	, current_timestamp, current_timestamp,0,	367.00	,	0.10	,	30.70	        ,'Ser, Trapistów pełnotłusty'	,	23.50	,	0.00	,	2	),
(	198	, current_timestamp, current_timestamp,0,	351.00	,	0.10	,	26.80	        ,'Ser, Trapistów tłusty'	,	28.00	,	0.00	,	2	),
(	199	, current_timestamp, current_timestamp,0,	353.00	,	0.10	,	27.90	        ,'Ser, Tylżycki pełnotłusty'	,	26.10	,	0.00	,	2	),
(	200	, current_timestamp, current_timestamp,0,	334.00	,	0.10	,	25.00	        ,'Ser, Tylżycki tłusty'	,	27.80	,	0.00	,	2	),
(	201	, current_timestamp, current_timestamp,0,	161.00	,	3.00	,	11.00	        ,'Serek homogenizowany, pełnotłusty'	,	12.70	,	0.00	,	2	),
(	202	, current_timestamp, current_timestamp,0,	168.00	,	17.70	,	3.90	        ,'Serek homogenizowany, truskawkowy'	,	15.30	,	0.10	,	2	),
(	203	, current_timestamp, current_timestamp,0,	159.00	,	13.30	,	4.20	        ,'Serek homogenizowany, waniliowy'	,	16.80	,	0.00	,	2	),
(	204	, current_timestamp, current_timestamp,0,	298.00	,	1.20	,	27.00	        ,'Serek topiony, edamski'	,	13.50	,	0.00	,	2	),
(	205	, current_timestamp, current_timestamp,0,	101.00	,	3.30	,	4.30	        ,'Serek twarogowy, ziarnisty'	,	12.30	,	0.00	,	2	),
(	206	, current_timestamp, current_timestamp,0,	379.00	,	2.40	,	37.10	        ,'Serek typu ”Fromage” naturalny'	,	10.20	,	0.00	,	2	),
(	207	, current_timestamp, current_timestamp,0,	367.00	,	4.00	,	35.20	        ,'Serek typu „Fromage” z czosnkiem'	,	10.00	,	0.20	,	2	),
(	208	, current_timestamp, current_timestamp,0,	133.00	,	3.90	,	12.00	        ,'Śmietana, 12% tłuszczu'	,	2.70	,	0.00	,	2	),
(	209	, current_timestamp, current_timestamp,0,	184.00	,	3.60	,	18.00	        ,'Śmietana, 18% tłuszczu'	,	2.50	,	0.00	,	2	),
(	210	, current_timestamp, current_timestamp,0,	107.00	,	4.00	,	9.00	        ,'Śmietanka do kawy, 9% tłuszczu'	,	2.80	,	0.00	,	2	),
(	211	, current_timestamp, current_timestamp,0,	287.00	,	3.10	,	30.00	        ,'Śmietanka kremowa, 30% tłuszczu'	,	2.20	,	0.00	,	2	),
(	212	, current_timestamp, current_timestamp,0,	244.00	,	0.90	,	20.20	        ,'Baleron gotowany'	,	15.10	,	0.00	,	3	),
(	213	, current_timestamp, current_timestamp,0,	143.00	,	0.10	,	9.30	        ,'Baton szynkowy z indyka'	,	14.90	,	0.00	,	3	),
(	214	, current_timestamp, current_timestamp,0,	144.00	,	0.10	,	8.60	        ,'Baton z kurczaka'	,	16.70	,	0.00	,	3	),
(	215	, current_timestamp, current_timestamp,0,	326.00	,	0.00	,	24.30	        ,'Kabanosy'	,	27.40	,	0.00	,	3	),
(	216	, current_timestamp, current_timestamp,0,	247.00	,	0.10	,	17.40	        ,'Kabanosy z kurczaka'	,	22.80	,	0.00	,	3	),
(	217	, current_timestamp, current_timestamp,0,	204.00	,	16.40	,	11.70	        ,'Kaszanka z kurczaka'	,	9.80	,	1.70	,	3	),
(	218	, current_timestamp, current_timestamp,0,	109.00	,	0.10	,	3.30	        ,'Kiełbasa delikatesowa z kurczaka'	,	19.60	,	0.00	,	3	),
(	219	, current_timestamp, current_timestamp,0,	320.00	,	0.50	,	29.20	        ,'Kiełbasa domowa'	,	14.70	,	0.10	,	3	),
(	220	, current_timestamp, current_timestamp,0,	236.00	,	0.10	,	17.90	        ,'Kiełbasa jałowcowa z kurczaka'	,	19.00	,	0.00	,	3	),
(	221	, current_timestamp, current_timestamp,0,	179.00	,	3.00	,	13.50	        ,'Kiełbasa kanapkowa z kurczaka'	,	11.80	,	0.10	,	3	),
(	222	, current_timestamp, current_timestamp,0,	323.00	,	0.00	,	24.80	        ,'Kiełbasa krakowska, sucha'	,	25.60	,	0.00	,	3	),
(	223	, current_timestamp, current_timestamp,0,	249.00	,	4.80	,	18.00	        ,'Kiełbasa lubuska'	,	17.50	,	0.10	,	3	),
(	224	, current_timestamp, current_timestamp,0,	129.00	,	0.10	,	7.70	        ,'Kiełbasa mazurska z indyka'	,	14.80	,	0.00	,	3	),
(	225	, current_timestamp, current_timestamp,0,	205.00	,	0.00	,	17.70	        ,'Kiełbasa mortadela'	,	12.00	,	0.00	,	3	),
(	226	, current_timestamp, current_timestamp,0,	209.00	,	0.10	,	18.50	        ,'Kiełbasa mortadela z indyka'	,	11.00	,	0.00	,	3	),
(	227	, current_timestamp, current_timestamp,0,	291.00	,	0.00	,	20.10	        ,'Kiełbasa myśliwska, sucha'	,	27.80	,	0.00	,	3	),
(	228	, current_timestamp, current_timestamp,0,	323.00	,	0.00	,	31.50	        ,'Kiełbasa parówkowa'	,	11.00	,	0.00	,	3	),
(	229	, current_timestamp, current_timestamp,0,	232.00	,	0.10	,	16.70	        ,'Kiełbasa podlaska z kurczaka'	,	20.70	,	0.00	,	3	),
(	230	, current_timestamp, current_timestamp,0,	162.00	,	0.00	,	8.40	        ,'Kiełbasa podsuszana z kurczaka'	,	21.70	,	0.00	,	3	),
(	231	, current_timestamp, current_timestamp,0,	247.00	,	0.90	,	19.60	        ,'Kiełbasa podwawelska'	,	17.30	,	0.10	,	3	),
(	232	, current_timestamp, current_timestamp,0,	203.00	,	0.00	,	13.40	        ,'Kiełbasa rzeszowska'	,	20.90	,	0.00	,	3	),
(	233	, current_timestamp, current_timestamp,0,	88.00	,	0.20	,	2.00	        ,'Kiełbasa szynkowa z indyka'	,	17.20	,	0.00	,	3	),
(	234	, current_timestamp, current_timestamp,0,	110.00	,	0.00	,	5.00	        ,'Kiełbasa szynkowa z kurczaka'	,	16.20	,	0.00	,	3	),
(	235	, current_timestamp, current_timestamp,0,	210.00	,	0.00	,	15.30	        ,'Kiełbasa śląska'	,	18.40	,	0.00	,	3	),
(	236	, current_timestamp, current_timestamp,0,	263.00	,	0.00	,	20.10	        ,'Kiełbasa toruńska'	,	20.90	,	0.00	,	3	),
(	237	, current_timestamp, current_timestamp,0,	209.00	,	0.00	,	15.60	        ,'Kiełbasa zwyczajna'	,	17.60	,	0.00	,	3	),
(	238	, current_timestamp, current_timestamp,0,	315.00	,	0.00	,	26.30	        ,'Kiełbasa żywiecka'	,	20.30	,	0.00	,	3	),
(	239	, current_timestamp, current_timestamp,0,	308.00	,	0.10	,	27.70	        ,'Kiełbaski bawarskie'	,	15.50	,	0.00	,	3	),
(	240	, current_timestamp, current_timestamp,0,	195.00	,	13.00	,	12.60	        ,'Kiszka kaszana jęczmienna'	,	7.30	,	1.00	,	3	),
(	241	, current_timestamp, current_timestamp,0,	404.00	,	9.20	,	35.00	        ,'Kiszka krwista'	,	14.20	,	0.20	,	3	),
(	242	, current_timestamp, current_timestamp,0,	384.00	,	4.30	,	35.70	        ,'Kiszka pasztetowa'	,	12.50	,	0.10	,	3	),
(	243	, current_timestamp, current_timestamp,0,	199.00	,	2.80	,	11.90	        ,'Kurczak faszerowany, pieczony'	,	20.50	,	0.10	,	3	),
(	244	, current_timestamp, current_timestamp,0,	171.00	,	0.10	,	11.70	        ,'Mielonka (Luncheon meat)'	,	12.80	,	0.00	,	3	),
(	245	, current_timestamp, current_timestamp,0,	141.00	,	1.70	,	7.60	        ,'Ozory w galarecie'	,	16.70	,	0.30	,	3	),
(	246	, current_timestamp, current_timestamp,0,	342.00	,	0.00	,	34.30	        ,'Parówki popularne'	,	9.50	,	0.00	,	3	),
(	247	, current_timestamp, current_timestamp,0,	259.00	,	4.20	,	22.40	        ,'Parówki z kurczaka'	,	10.80	,	0.10	,	3	),
(	248	, current_timestamp, current_timestamp,0,	156.00	,	3.50	,	11.30	        ,'Pasta kanapkowa z kurczaka'	,	10.40	,	0.00	,	3	),
(	249	, current_timestamp, current_timestamp,0,	390.00	,	13.50	,	31.20	        ,'Pasztet pieczony – sklepowy'	,	17.00	,	2.30	,	3	),
(	250	, current_timestamp, current_timestamp,0,	228.00	,	3.60	,	21.10	        ,'Pasztet podlaski z kurczaka'	,	6.70	,	0.20	,	3	),
(	251	, current_timestamp, current_timestamp,0,	214.00	,	7.50	,	14.30	        ,'Pasztet z kurczaka pieczony'	,	14.40	,	0.40	,	3	),
(	252	, current_timestamp, current_timestamp,0,	180.00	,	9.10	,	10.20	        ,'Pieczeń z kurczaka z pieczarkami'	,	13.80	,	0.70	,	3	),
(	253	, current_timestamp, current_timestamp,0,	177.00	,	2.40	,	10.00	        ,'Polędwica luksusowa'	,	19.50	,	0.00	,	3	),
(	254	, current_timestamp, current_timestamp,0,	165.00	,	0.90	,	9.10	        ,'Polędwica sopocka'	,	19.90	,	0.00	,	3	),
(	255	, current_timestamp, current_timestamp,0,	101.00	,	1.40	,	4.40	        ,'Polędwica w galarecie'	,	14.50	,	0.50	,	3	),
(	256	, current_timestamp, current_timestamp,0,	105.00	,	0.10	,	4.60	        ,'Polędwica z indyka'	,	15.80	,	0.00	,	3	),
(	257	, current_timestamp, current_timestamp,0,	93.00	,	0.00	,	1.20	        ,'Polędwica z piersi kurczaka'	,	20.40	,	0.00	,	3	),
(	258	, current_timestamp, current_timestamp,0,	540.00	,	0.90	,	50.60	        ,'Salami luksusowe'	,	21.90	,	0.00	,	3	),
(	259	, current_timestamp, current_timestamp,0,	568.00	,	1.40	,	53.70	        ,'Salami popularne'	,	21.60	,	0.10	,	3	),
(	260	, current_timestamp, current_timestamp,0,	336.00	,	0.50	,	32.00	        ,'Salceson czarny'	,	12.60	,	0.10	,	3	),
(	261	, current_timestamp, current_timestamp,0,	318.00	,	0.00	,	29.30	        ,'Salceson włoski'	,	14.60	,	0.00	,	3	),
(	262	, current_timestamp, current_timestamp,0,	123.00	,	0.00	,	5.60	        ,'Szynka delikatesowa z kurczaka'	,	18.20	,	0.00	,	3	),
(	263	, current_timestamp, current_timestamp,0,	102.00	,	0.90	,	4.40	        ,'Szynka kanapkowa'	,	14.20	,	0.00	,	3	),
(	264	, current_timestamp, current_timestamp,0,	253.00	,	0.90	,	20.30	        ,'Szynka wiejska'	,	17.10	,	0.00	,	3	),
(	265	, current_timestamp, current_timestamp,0,	233.00	,	1.00	,	18.30	        ,'Szynka wieprzowa, gotowana'	,	16.40	,	0.00	,	3	),
(	266	, current_timestamp, current_timestamp,0,	107.00	,	1.10	,	2.00	        ,'Szynka wołowa, gotowana'	,	20.90	,	0.00	,	3	),
(	267	, current_timestamp, current_timestamp,0,	98.00	,	0.20	,	1.20	        ,'Szynka z piersi kurczaka'	,	21.20	,	0.00	,	3	),
(	268	, current_timestamp, current_timestamp,0,	117.00	,	0.00	,	5.30	        ,'Szynka z udźca z kurczaka'	,	17.20	,	0.00	,	3	),
(	269	, current_timestamp, current_timestamp,0,	191.00	,	1.40	,	14.70	        ,'Szynkówka wieprzowa'	,	13.60	,	0.00	,	3	),
(	270	, current_timestamp, current_timestamp,0,	85.00	,	1.40	,	1.50	        ,'Szynkówka wołowa'	,	16.20	,	0.00	,	3	),
(	271	, current_timestamp, current_timestamp,0,	231.00	,	0.70	,	20.90	        ,'Wątrobianka'	,	10.70	,	0.10	,	3	),
(	272	, current_timestamp, current_timestamp,0,	102.00	,	0.50	,	3.10	        ,'Wędzonka wołowa, gotowana'	,	17.80	,	0.00	,	3	),
(	273	, current_timestamp, current_timestamp,0,	194.00	,	1.70	,	14.80	        ,'Baranina, biodrówka'	,	13.50	,	0.00	,	4	),
(	274	, current_timestamp, current_timestamp,0,	284.00	,	0.00	,	25.00	        ,'Baranina, łopatka'	,	15.60	,	0.00	,	4	),
(	275	, current_timestamp, current_timestamp,0,	381.00	,	NULL	,	37.00	        ,'Baranina, mostek'	,	12.00	,	0.00	,	4	),
(	276	, current_timestamp, current_timestamp,0,	112.00	,	NULL	,	3.40	        ,'Baranina, polędwica'	,	20.40	,	0.00	,	4	),
(	277	, current_timestamp, current_timestamp,0,	131.00	,	NULL	,	6.10	        ,'Baranina, sznycel'	,	19.10	,	0.00	,	4	),
(	278	, current_timestamp, current_timestamp,0,	232.00	,	0.00	,	18.00	        ,'Baranina, udziec'	,	18.00	,	0.00	,	4	),
(	279	, current_timestamp, current_timestamp,0,	98.00	,	NULL	,	1.60	        ,'Cielęcina, goleń'	,	20.90	,	0.00	,	4	),
(	280	, current_timestamp, current_timestamp,0,	106.00	,	0.00	,	2.80	        ,'Cielęcina, łopatka'	,	19.90	,	0.00	,	4	),
(	281	, current_timestamp, current_timestamp,0,	131.00	,	NULL	,	6.30	        ,'Cielęcina, mostek'	,	18.60	,	0.00	,	4	),
(	282	, current_timestamp, current_timestamp,0,	95.00	,	NULL	,	1.40	        ,'Cielęcina, polędwica'	,	20.60	,	0.00	,	4	),
(	283	, current_timestamp, current_timestamp,0,	105.00	,	0.00	,	2.40	        ,'Cielęcina, sznyclówka'	,	20.50	,	0.00	,	4	),
(	284	, current_timestamp, current_timestamp,0,	108.00	,	0.00	,	3.10	        ,'Cielęcina, udziec'	,	19.90	,	0.00	,	4	),
(	285	, current_timestamp, current_timestamp,0,	84.00	,	0.00	,	2.20	        ,'Flaki'	,	16.00	,	0.00	,	4	),
(	286	, current_timestamp, current_timestamp,0,	99.00	,	NULL	,	3.40	        ,'Grasica cielęca'	,	17.20	,	0.00	,	4	),
(	287	, current_timestamp, current_timestamp,0,	160.00	,	0.00	,	9.10	        ,'Jagnięcina, udziec'	,	19.40	,	0.00	,	4	),
(	288	, current_timestamp, current_timestamp,0,	109.00	,	0.00	,	2.50	        ,'Konina, mięso bez kości'	,	21.50	,	0.00	,	4	),
(	289	, current_timestamp, current_timestamp,0,	109.00	,	0.00	,	2.50	        ,'Konina, mięso z kością'	,	21.50	,	0.00	,	4	),
(	290	, current_timestamp, current_timestamp,0,	5.00	,	0.00	,	0.00	        ,'Kości, wywar'	,	1.20	,	0.00	,	4	),
(	291	, current_timestamp, current_timestamp,0,	128.00	,	0.60	,	9.10	        ,'Mózg barani'	,	10.90	,	0.00	,	4	),
(	292	, current_timestamp, current_timestamp,0,	111.00	,	0.50	,	7.60	        ,'Mózg cielęcy'	,	10.10	,	0.00	,	4	),
(	293	, current_timestamp, current_timestamp,0,	139.00	,	0.00	,	10.60	        ,'Mózg wieprzowy'	,	11.10	,	0.00	,	4	),
(	294	, current_timestamp, current_timestamp,0,	102.00	,	0.00	,	3.80	        ,'Nerki wieprzowe'	,	16.80	,	0.00	,	4	),
(	295	, current_timestamp, current_timestamp,0,	95.00	,	0.00	,	3.60	        ,'Nerki wołowe'	,	15.60	,	0.00	,	4	),
(	296	, current_timestamp, current_timestamp,0,	274.00	,	0.00	,	20.40	        ,'Nogi wieprzowe'	,	23.00	,	0.00	,	4	),
(	297	, current_timestamp, current_timestamp,0,	194.00	,	NULL	,	13.20	        ,'Ozór barani'	,	18.70	,	0.00	,	4	),
(	298	, current_timestamp, current_timestamp,0,	165.00	,	0.00	,	11.10	        ,'Ozór wieprzowy'	,	16.50	,	0.00	,	4	),
(	299	, current_timestamp, current_timestamp,0,	95.00	,	0.20	,	2.30	        ,'Płuca baranie'	,	18.40	,	0.00	,	4	),
(	300	, current_timestamp, current_timestamp,0,	111.00	,	0.00	,	4.80	        ,'Serca wieprzowe'	,	16.90	,	0.00	,	4	),
(	301	, current_timestamp, current_timestamp,0,	157.00	,	0.00	,	10.00	        ,'Serce baranie'	,	16.80	,	0.00	,	4	),
(	302	, current_timestamp, current_timestamp,0,	113.00	,	1.00	,	5.10	        ,'Serce cielęce'	,	15.90	,	0.00	,	4	),
(	303	, current_timestamp, current_timestamp,0,	117.00	,	0.40	,	5.30	        ,'Serce wołowe'	,	16.90	,	0.00	,	4	),
(	304	, current_timestamp, current_timestamp,0,	133.00	,	3.00	,	4.00	        ,'Wątroba barania'	,	21.20	,	0.00	,	4	),
(	305	, current_timestamp, current_timestamp,0,	124.00	,	4.10	,	3.30	        ,'Wątroba cielęca'	,	19.20	,	0.00	,	4	),
(	306	, current_timestamp, current_timestamp,0,	130.00	,	2.60	,	3.40	        ,'Wątroba wieprzowa'	,	22.00	,	0.00	,	4	),
(	307	, current_timestamp, current_timestamp,0,	125.00	,	4.00	,	3.10	        ,'Wątroba wołowa'	,	20.00	,	0.00	,	4	),
(	308	, current_timestamp, current_timestamp,0,	510.00	,	0.00	,	53.00	        ,'Wieprzowina, boczek bez kości'	,	10.10	,	0.00	,	4	),
(	309	, current_timestamp, current_timestamp,0,	294.00	,	0.00	,	24.70	        ,'Wieprzowina, golonka ze skórą'	,	18.60	,	0.00	,	4	),
(	310	, current_timestamp, current_timestamp,0,	267.00	,	0.00	,	22.80	        ,'Wieprzowina, karkówka'	,	16.10	,	0.00	,	4	),
(	311	, current_timestamp, current_timestamp,0,	257.00	,	0.00	,	21.70	        ,'Wieprzowina, łopatka'	,	16.00	,	0.00	,	4	),
(	312	, current_timestamp, current_timestamp,0,	630.00	,	0.00	,	67.80	        ,'Wieprzowina, podgardle'	,	7.40	,	0.00	,	4	),
(	313	, current_timestamp, current_timestamp,0,	174.00	,	0.00	,	10.00	        ,'Wieprzowina, schab środkowy z kością'	,	21.00	,	0.00	,	4	),
(	314	, current_timestamp, current_timestamp,0,	261.00	,	0.00	,	21.30	        ,'Wieprzowina, szynka surowa'	,	18.00	,	0.00	,	4	),
(	315	, current_timestamp, current_timestamp,0,	321.00	,	0.00	,	29.30	        ,'Wieprzowina, żeberka'	,	15.20	,	0.00	,	4	),
(	316	, current_timestamp, current_timestamp,0,	216.00	,	0.00	,	15.50	        ,'Wołowina, łata'	,	19.10	,	0.00	,	4	),
(	317	, current_timestamp, current_timestamp,0,	225.00	,	0.00	,	15.70	        ,'Wołowina, ogon'	,	21.40	,	0.00	,	4	),
(	318	, current_timestamp, current_timestamp,0,	117.00	,	0.00	,	3.60	        ,'Wołowina, pieczeń'	,	20.90	,	0.00	,	4	),
(	319	, current_timestamp, current_timestamp,0,	113.00	,	0.00	,	3.50	        ,'Wołowina, polędwica'	,	20.10	,	0.00	,	4	),
(	320	, current_timestamp, current_timestamp,0,	152.00	,	0.00	,	7.30	        ,'Wołowina, rostbef'	,	21.50	,	0.00	,	4	),
(	321	, current_timestamp, current_timestamp,0,	157.00	,	0.00	,	10.10	        ,'Wołowina, rozbratel'	,	16.70	,	0.00	,	4	),
(	322	, current_timestamp, current_timestamp,0,	217.00	,	0.00	,	15.70	        ,'Wołowina, szponder'	,	19.30	,	0.00	,	4	),
(	323	, current_timestamp, current_timestamp,0,	339.00	,	0.00	,	31.80	        ,'Gęś, tuszka'	,	14.10	,	0.00	,	5	),
(	324	, current_timestamp, current_timestamp,0,	84.00	,	0.00	,	0.70	        ,'Indyk, mięso z piersi, bez skóry'	,	19.20	,	0.00	,	5	),
(	325	, current_timestamp, current_timestamp,0,	100.00	,	0.00	,	2.70	        ,'Indyk, mięso z piersi, ze skórą'	,	18.70	,	0.00	,	5	),
(	326	, current_timestamp, current_timestamp,0,	100.00	,	0.00	,	3.70	        ,'Indyk, podudzie bez skóry'	,	16.60	,	0.00	,	5	),
(	327	, current_timestamp, current_timestamp,0,	142.00	,	0.00	,	8.90	        ,'Indyk, podudzie ze skórą'	,	15.70	,	0.00	,	5	),
(	328	, current_timestamp, current_timestamp,0,	413.00	,	0.00	,	42.40	        ,'Indyk, skóra'	,	9.40	,	0.00	,	5	),
(	329	, current_timestamp, current_timestamp,0,	115.00	,	0.00	,	4.70	        ,'Indyk, skrzydła bez skóry'	,	18.00	,	0.00	,	5	),
(	330	, current_timestamp, current_timestamp,0,	168.00	,	0.00	,	11.40	        ,'Indyk, skrzydła ze skórą'	,	16.50	,	0.00	,	5	),
(	331	, current_timestamp, current_timestamp,0,	168.00	,	0.00	,	11.40	        ,'Indyk, skrzydło'	,	16.50	,	0.00	,	5	),
(	332	, current_timestamp, current_timestamp,0,	129.00	,	0.00	,	6.80	        ,'Indyk, tuszka'	,	17.00	,	0.00	,	5	),
(	333	, current_timestamp, current_timestamp,0,	104.00	,	0.00	,	2.80	        ,'Indyk, udziec bez skóry'	,	19.40	,	0.00	,	5	),
(	334	, current_timestamp, current_timestamp,0,	131.00	,	0.00	,	6.40	        ,'Indyk, udziec ze skórą'	,	18.40	,	0.00	,	5	),
(	335	, current_timestamp, current_timestamp,0,	99.00	,	0.00	,	2.00	        ,'Kaczka, bez skóry i kości'	,	20.10	,	0.00	,	5	),
(	336	, current_timestamp, current_timestamp,0,	308.00	,	0.00	,	28.60	        ,'Kaczka, tuszka'	,	13.50	,	0.00	,	5	),
(	337	, current_timestamp, current_timestamp,0,	156.00	,	0.00	,	8.00	        ,'Królik, tuszka'	,	21.00	,	0.00	,	5	),
(	338	, current_timestamp, current_timestamp,0,	202.00	,	0.00	,	14.30	        ,'Kura, tuszka'	,	18.50	,	0.00	,	5	),
(	339	, current_timestamp, current_timestamp,0,	99.00	,	0.00	,	1.30	        ,'Kurczak, mięso z piersi bez skóry'	,	21.50	,	0.00	,	5	),
(	340	, current_timestamp, current_timestamp,0,	158.00	,	0.00	,	10.20	        ,'Kurczak, pałka z kurczaka'	,	16.80	,	0.00	,	5	),
(	341	, current_timestamp, current_timestamp,0,	379.00	,	0.00	,	37.90	        ,'Kurczak, skóra'	,	10.70	,	0.00	,	5	),
(	342	, current_timestamp, current_timestamp,0,	186.00	,	0.00	,	12.20	        ,'Kurczak, skrzydełka'	,	19.20	,	0.00	,	5	),
(	343	, current_timestamp, current_timestamp,0,	158.00	,	0.00	,	9.30	        ,'Kurczak, tuszka'	,	18.60	,	0.00	,	5	),
(	344	, current_timestamp, current_timestamp,0,	125.00	,	0.00	,	6.00	        ,'Kurczak, udka bez skóry'	,	17.80	,	0.00	,	5	),
(	345	, current_timestamp, current_timestamp,0,	158.00	,	0.00	,	10.20	        ,'Kurczak, udka ze skórą'	,	16.80	,	0.00	,	5	),
(	346	, current_timestamp, current_timestamp,0,	136.00	,	0.60	,	6.30	        ,'Wątróbka z kurczaka'	,	19.10	,	0.00	,	5	),
(	347	, current_timestamp, current_timestamp,0,	114.00	,	0.60	,	4.20	        ,'Żołądek z kurczaka'	,	18.20	,	0.00	,	5	),
(	348	, current_timestamp, current_timestamp,0,	49.00	,	0.70	,	0.20	        ,'Białko jaja kurzego'	,	10.90	,	0.00	,	6	),
(	349	, current_timestamp, current_timestamp,0,	139.00	,	0.60	,	9.70	        ,'Jaja kurze całe'	,	12.50	,	0.00	,	6	),
(	350	, current_timestamp, current_timestamp,0,	576.00	,	2.70	,	41.70	        ,'Proszek jajeczny'	,	48.40	,	0.00	,	6	),
(	351	, current_timestamp, current_timestamp,0,	314.00	,	0.30	,	28.20	        ,'Żółtko jaja kurzego'	,	15.50	,	0.00	,	6	),
(	352	, current_timestamp, current_timestamp,0,	884.00	,	0.00	,	100.00	        ,'„Planta”, tłuszcz roślinny'	,	0.00	,	0.00	,	7	),
(	353	, current_timestamp, current_timestamp,0,	747.00	,	0.00	,	81.30	        ,'Łój barani'	,	3.90	,	0.00	,	7	),
(	354	, current_timestamp, current_timestamp,0,	398.00	,	0.00	,	45.00	        ,'Margaryna miękka, 45% tłuszczu'	,	0.00	,	0.00	,	7	),
(	355	, current_timestamp, current_timestamp,0,	442.00	,	0.00	,	50.00	        ,'Margaryna miękka, 50% tłuszczu'	,	0.00	,	0.00	,	7	),
(	356	, current_timestamp, current_timestamp,0,	533.00	,	0.30	,	60.00	        ,'Margaryna miękka, 60% tłuszczu'	,	0.20	,	0.00	,	7	),
(	357	, current_timestamp, current_timestamp,0,	621.00	,	0.40	,	70.00	        ,'Margaryna miękka, 70% tłuszczu'	,	0.10	,	0.00	,	7	),
(	358	, current_timestamp, current_timestamp,0,	710.00	,	0.40	,	80.00	        ,'Margaryna miękka, 80% tłuszczu'	,	0.30	,	0.00	,	7	),
(	359	, current_timestamp, current_timestamp,0,	710.00	,	0.40	,	80.00	        ,'Margaryna twarda (kostkowa), 80% tłuszczu'	,	0.30	,	0.00	,	7	),
(	360	, current_timestamp, current_timestamp,0,	735.00	,	0.70	,	82.50	        ,'Masło ekstra'	,	0.70	,	0.00	,	7	),
(	361	, current_timestamp, current_timestamp,0,	615.00	,	9.30	,	50.70	        ,'Masło orzechowe'	,	27.70	,	8.40	,	7	),
(	362	, current_timestamp, current_timestamp,0,	659.00	,	1.10	,	73.50	        ,'Masło śmietankowe'	,	1.10	,	0.00	,	7	),
(	363	, current_timestamp, current_timestamp,0,	900.00	,	0.00	,	100.00	        ,'Olej arachidonowy'	,	0.00	,	0.00	,	7	),
(	364	, current_timestamp, current_timestamp,0,	883.00	,	0.00	,	99.90	        ,'Olej kokosowy'	,	0.00	,	0.00	,	7	),
(	365	, current_timestamp, current_timestamp,0,	884.00	,	0.00	,	100.00	        ,'Olej krokoszowy'	,	0.00	,	0.00	,	7	),
(	366	, current_timestamp, current_timestamp,0,	884.00	,	0.00	,	100.00	        ,'Olej kukurydziany'	,	0.00	,	0.00	,	7	),
(	367	, current_timestamp, current_timestamp,0,	900.00	,	0.00	,	100.00	        ,'Olej lniany'	,	0.00	,	0.00	,	7	),
(	368	, current_timestamp, current_timestamp,0,	884.00	,	0.00	,	100.00	        ,'Olej palmowy'	,	0.00	,	0.00	,	7	),
(	369	, current_timestamp, current_timestamp,0,	884.00	,	0.00	,	100.00	        ,'Olej rzepakowo-sojowy'	,	0.00	,	0.00	,	7	),
(	370	, current_timestamp, current_timestamp,0,	884.00	,	0.00	,	100.00	        ,'Olej rzepakowy o obniżonej zawartości kwasu erukowego'	,	0.00	,	0.00	,	7	),
(	371	, current_timestamp, current_timestamp,0,	884.00	,	0.00	,	100.00	        ,'Olej rzepakowy tłoczony na zimno'	,	0.00	,	0.00	,	7	),
(	372	, current_timestamp, current_timestamp,0,	884.00	,	0.00	,	100.00	        ,'Olej rzepakowy uniwersalny'	,	0.00	,	0.00	,	7	),
(	373	, current_timestamp, current_timestamp,0,	884.00	,	0.00	,	100.00	        ,'Olej sezamowy'	,	0.00	,	0.00	,	7	),
(	374	, current_timestamp, current_timestamp,0,	884.00	,	0.00	,	100.00	        ,'Olej słonecznikowy'	,	0.00	,	0.00	,	7	),
(	375	, current_timestamp, current_timestamp,0,	884.00	,	0.00	,	100.00	        ,'Olej sojowy'	,	0.00	,	0.00	,	7	),
(	376	, current_timestamp, current_timestamp,0,	883.00	,	0.00	,	99.90	        ,'Olej z nasion bawełny'	,	0.00	,	0.00	,	7	),
(	377	, current_timestamp, current_timestamp,0,	900.00	,	0.00	,	100.00	        ,'Olej z nasion bawełny'	,	0.00	,	0.00	,	7	),
(	378	, current_timestamp, current_timestamp,0,	884.00	,	0.00	,	99.90	        ,'Olej z orzeszków ziemnych'	,	0.00	,	0.00	,	7	),
(	379	, current_timestamp, current_timestamp,0,	900.00	,	0.00	,	100.00	        ,'Olej z pestek dyni'	,	0.00	,	0.00	,	7	),
(	380	, current_timestamp, current_timestamp,0,	884.00	,	0.00	,	100.00	        ,'Olej z pestek winogron'	,	0.00	,	0.00	,	7	),
(	381	, current_timestamp, current_timestamp,0,	900.00	,	0.00	,	100.00	        ,'Olej z pestek winogron'	,	0.00	,	0.00	,	7	),
(	382	, current_timestamp, current_timestamp,0,	884.00	,	0.00	,	100.00	        ,'Olej z zarodków pszennych'	,	0.00	,	0.00	,	7	),
(	383	, current_timestamp, current_timestamp,0,	882.00	,	0.20	,	99.60	        ,'Oliwa z oliwek'	,	0.00	,	0.00	,	7	),
(	384	, current_timestamp, current_timestamp,0,	769.00	,	0.00	,	79.20	        ,'Skwarki'	,	16.90	,	0.00	,	7	),
(	385	, current_timestamp, current_timestamp,0,	797.00	,	0.00	,	89.00	        ,'Słonina'	,	2.40	,	0.00	,	7	),
(	386	, current_timestamp, current_timestamp,0,	880.00	,	0.00	,	99.50	        ,'Smalec'	,	0.00	,	0.00	,	7	),
(	387	, current_timestamp, current_timestamp,0,	896.00	,	0.00	,	99.50	        ,'Smalec gęsi'	,	NULL	,	0.00	,	7	),
(	388	, current_timestamp, current_timestamp,0,	573.00	,	0.90	,	64.00	        ,'Tłuszcz mieszany roślinno-zwierzęcy, 60% tłuszczu'	,	0.90	,	0.00	,	7	),
(	389	, current_timestamp, current_timestamp,0,	899.00	,	0.00	,	99.90	        ,'Tran'	,	0.00	,	0.00	,	7	),
(	390	, current_timestamp, current_timestamp,0,	11.00	,	NULL	,	0.20	        ,'Boczniaki'	,	2.30	,	5.90	,	8	),
(	391	, current_timestamp, current_timestamp,0,	41.00	,	5.20	,	0.60	        ,'Borowiki jadalne, surowe'	,	5.10	,	3.00	,	8	),
(	392	, current_timestamp, current_timestamp,0,	321.00	,	39.20	,	3.10	        ,'Borowiki jadalne, suszone'	,	37.70	,	7.50	,	8	),
(	393	, current_timestamp, current_timestamp,0,	18.00	,	NULL	,	0.60	        ,'Koźlarze'	,	3.10	,	6.50	,	8	),
(	394	, current_timestamp, current_timestamp,0,	18.00	,	0.30	,	0.80	        ,'Koźlarze czerwone'	,	2.20	,	4.70	,	8	),
(	395	, current_timestamp, current_timestamp,0,	15.00	,	0.20	,	0.50	        ,'Kurki'	,	2.40	,	4.70	,	8	),
(	396	, current_timestamp, current_timestamp,0,	12.00	,	0.30	,	0.40	        ,'Maślaki'	,	1.70	,	5.90	,	8	),
(	397	, current_timestamp, current_timestamp,0,	19.00	,	0.10	,	0.70	        ,'Opieńka'	,	3.20	,	6.80	,	8	),
(	398	, current_timestamp, current_timestamp,0,	17.00	,	2.60	,	0.40	        ,'Pieczarka uprawna, świeża'	,	2.70	,	2.00	,	8	),
(	399	, current_timestamp, current_timestamp,0,	19.00	,	4.30	,	0.40	        ,'Pieczarki marynowane, konserwowe'	,	2.30	,	2.70	,	8	),
(	400	, current_timestamp, current_timestamp,0,	18.00	,	0.10	,	0.70	        ,'Rydze'	,	2.80	,	5.50	,	8	),
(	401	, current_timestamp, current_timestamp,0,	15.00	,	0.50	,	0.30	        ,'Smardze jadalne'	,	2.50	,	7.00	,	8	),
(	402	, current_timestamp, current_timestamp,0,	70.00	,	7.40	,	0.50	        ,'Trufle'	,	8.30	,	16.50	,	8	),
(	403	, current_timestamp, current_timestamp,0,	556.00	,	18.00	,	45.80	        ,'Dynia pestki'	,	24.50	,	5.30	,	9	),
(	404	, current_timestamp, current_timestamp,0,	196.00	,	41.20	,	1.90	        ,'Kasztany jadalne'	,	3.40	,	8.40	,	9	),
(	405	, current_timestamp, current_timestamp,0,	500.00	,	35.00	,	31.00	        ,'Len, nasiona'	,	24.50	,	3.90	,	9	),
(	406	, current_timestamp, current_timestamp,0,	478.00	,	24.70	,	42.90	        ,'Mak niebieski'	,	20.10	,	20.50	,	9	),
(	407	, current_timestamp, current_timestamp,0,	572.00	,	20.50	,	52.00	        ,'Migdały'	,	20.00	,	12.90	,	9	),
(	408	, current_timestamp, current_timestamp,0,	335.00	,	15.20	,	33.50	        ,'Orzech kokosowy'	,	3.40	,	9.00	,	9	),
(	409	, current_timestamp, current_timestamp,0,	560.00	,	19.20	,	46.10	        ,'Orzechy arachidowe'	,	25.70	,	7.30	,	9	),
(	410	, current_timestamp, current_timestamp,0,	640.00	,	14.90	,	63.00	        ,'Orzechy laskowe'	,	14.40	,	8.90	,	9	),
(	411	, current_timestamp, current_timestamp,0,	703.00	,	4.00	,	73.00	        ,'Orzechy macadamia'	,	7.50	,	11.40	,	9	),
(	412	, current_timestamp, current_timestamp,0,	595.00	,	29.40	,	45.60	        ,'Orzechy nerkowca'	,	17.70	,	2.10	,	9	),
(	413	, current_timestamp, current_timestamp,0,	670.00	,	3.60	,	66.80	        ,'Orzechy para'	,	13.60	,	6.70	,	9	),
(	414	, current_timestamp, current_timestamp,0,	703.00	,	4.40	,	72.00	        ,'Orzechy pekan'	,	9.30	,	9.50	,	9	),
(	415	, current_timestamp, current_timestamp,0,	589.00	,	25.00	,	48.50	        ,'Orzechy pistacjowe'	,	20.50	,	6.10	,	9	),
(	416	, current_timestamp, current_timestamp,0,	645.00	,	18.00	,	60.30	        ,'Orzechy włoskie'	,	16.00	,	6.50	,	9	),
(	417	, current_timestamp, current_timestamp,0,	571.00	,	30.50	,	42.20	        ,'Orzeszki cashew'	,	17.20	,	2.90	,	9	),
(	418	, current_timestamp, current_timestamp,0,	674.00	,	20.50	,	60.00	        ,'Orzeszki pinii'	,	13.00	,	1.00	,	9	),
(	419	, current_timestamp, current_timestamp,0,	520.00	,	54.00	,	28.00	        ,'Płatki arachidowe'	,	13.00	,	NULL	,	9	),
(	420	, current_timestamp, current_timestamp,0,	632.00	,	10.00	,	59.90	        ,'Sezam, nasiona'	,	23.20	,	7.90	,	9	),
(	421	, current_timestamp, current_timestamp,0,	561.00	,	24.60	,	43.70	        ,'Słonecznik, nasiona'	,	24.40	,	6.00	,	9	),
(	422	, current_timestamp, current_timestamp,0,	606.00	,	27.00	,	63.20	        ,'Wiórki kokosowe'	,	5.60	,	21.10	,	9	),
(	423	, current_timestamp, current_timestamp,0,	16.00	,	2.60	,	0.20	        ,'Acerola, surowa'	,	0.20	,	2.00	,	10	),
(	424	, current_timestamp, current_timestamp,0,	41.00	,	11.80	,	0.20	        ,'Agrest'	,	0.80	,	3.00	,	10	),
(	425	, current_timestamp, current_timestamp,0,	54.00	,	13.60	,	0.20	        ,'Ananas'	,	0.40	,	1.20	,	10	),
(	426	, current_timestamp, current_timestamp,0,	84.00	,	21.00	,	0.10	        ,'Ananas, plastry w syropie'	,	0.40	,	1.00	,	10	),
(	427	, current_timestamp, current_timestamp,0,	36.00	,	8.40	,	0.10	        ,'Arbuz'	,	0.60	,	0.30	,	10	),
(	428	, current_timestamp, current_timestamp,0,	160.00	,	7.40	,	15.30	        ,'Awokado'	,	2.00	,	3.30	,	10	),
(	429	, current_timestamp, current_timestamp,0,	95.00	,	23.50	,	0.30	        ,'Banan'	,	1.00	,	1.70	,	10	),
(	430	, current_timestamp, current_timestamp,0,	360.00	,	88.80	,	1.10	        ,'Banany, suszone'	,	3.80	,	6.40	,	10	),
(	431	, current_timestamp, current_timestamp,0,	54.00	,	6.50	,	1.70	        ,'Bez czarny, owoce'	,	2.60	,	6.50	,	10	),
(	432	, current_timestamp, current_timestamp,0,	46.00	,	11.90	,	0.20	        ,'Brzoskwinia'	,	1.00	,	1.90	,	10	),
(	433	, current_timestamp, current_timestamp,0,	73.00	,	18.20	,	0.10	        ,'Brzoskwinie w syropie'	,	0.40	,	0.90	,	10	),
(	434	, current_timestamp, current_timestamp,0,	63.00	,	13.60	,	0.30	        ,'Cherymoja (anone)'	,	1.50	,	1.00	,	10	),
(	435	, current_timestamp, current_timestamp,0,	36.00	,	9.50	,	0.30	        ,'Cytryna'	,	0.80	,	2.00	,	10	),
(	436	, current_timestamp, current_timestamp,0,	45.00	,	12.20	,	0.60	        ,'Czarne jagody'	,	0.80	,	3.20	,	10	),
(	437	, current_timestamp, current_timestamp,0,	45.00	,	12.20	,	0.60	        ,'Czarne jagody, mrożone'	,	0.80	,	3.20	,	10	),
(	438	, current_timestamp, current_timestamp,0,	61.00	,	14.60	,	0.30	        ,'Czereśnie'	,	1.00	,	1.30	,	10	),
(	439	, current_timestamp, current_timestamp,0,	277.00	,	74.00	,	0.40	        ,'Daktyle, suszone'	,	2.00	,	8.70	,	10	),
(	440	, current_timestamp, current_timestamp,0,	89.00	,	18.70	,	0.70	        ,'Dzika róża, owoce'	,	2.00	,	4.00	,	10	),
(	441	, current_timestamp, current_timestamp,0,	157.00	,	38.60	,	0.10	        ,'Dżem ananasowy, niskosłodzony'	,	0.20	,	0.50	,	10	),
(	442	, current_timestamp, current_timestamp,0,	155.00	,	38.30	,	0.10	        ,'Dżem brzoskwiniowy, niskosłodzony'	,	0.50	,	0.90	,	10	),
(	443	, current_timestamp, current_timestamp,0,	153.00	,	38.20	,	0.20	        ,'Dżem jagodowy, niskosłodzony'	,	0.30	,	1.30	,	10	),
(	444	, current_timestamp, current_timestamp,0,	157.00	,	38.80	,	0.10	        ,'Dżem morelowy, niskosłodzony'	,	0.40	,	0.70	,	10	),
(	445	, current_timestamp, current_timestamp,0,	159.00	,	39.20	,	0.10	        ,'Dżem pomarańczowy, niskosłodzony'	,	0.30	,	0.60	,	10	),
(	446	, current_timestamp, current_timestamp,0,	153.00	,	37.90	,	0.10	        ,'Dżem śliwkowy, niskosłodzony'	,	0.30	,	0.80	,	10	),
(	447	, current_timestamp, current_timestamp,0,	251.00	,	62.10	,	0.10	        ,'Dżem śliwkowy, wysokosłodzony'	,	0.30	,	0.80	,	10	),
(	448	, current_timestamp, current_timestamp,0,	153.00	,	37.80	,	0.20	        ,'Dżem truskawkowy, niskosłodzony'	,	0.30	,	0.80	,	10	),
(	449	, current_timestamp, current_timestamp,0,	252.00	,	62.30	,	0.20	        ,'Dżem truskawkowy, wysokosłodzony'	,	0.30	,	0.90	,	10	),
(	450	, current_timestamp, current_timestamp,0,	154.00	,	37.50	,	0.20	        ,'Dżem wiśniowy, niskosłodzony'	,	0.40	,	0.40	,	10	),
(	451	, current_timestamp, current_timestamp,0,	252.00	,	61.70	,	0.20	        ,'Dżem wiśniowy, wysokosłodzony'	,	0.40	,	0.50	,	10	),
(	452	, current_timestamp, current_timestamp,0,	152.00	,	39.60	,	0.10	        ,'Dżem z czarnych porzeczek, niskosłodzony'	,	0.50	,	2.80	,	10	),
(	453	, current_timestamp, current_timestamp,0,	251.00	,	63.90	,	0.10	        ,'Dżem z czarnych porzeczek, wysokosłodzony'	,	0.50	,	2.80	,	10	),
(	454	, current_timestamp, current_timestamp,0,	154.00	,	37.80	,	0.20	        ,'Dżem z owoców kiwi, niskosłodzony'	,	0.40	,	0.80	,	10	),
(	455	, current_timestamp, current_timestamp,0,	290.00	,	78.00	,	1.20	        ,'Figi, suszone'	,	3.60	,	12.90	,	10	),
(	456	, current_timestamp, current_timestamp,0,	77.00	,	19.10	,	0.30	        ,'Figi, świeże'	,	0.80	,	2.90	,	10	),
(	457	, current_timestamp, current_timestamp,0,	74.00	,	16.70	,	0.60	        ,'Granaty'	,	0.70	,	2.20	,	10	),
(	458	, current_timestamp, current_timestamp,0,	36.00	,	9.80	,	0.20	        ,'Grejpfrut'	,	0.60	,	1.90	,	10	),
(	459	, current_timestamp, current_timestamp,0,	54.00	,	14.40	,	0.20	        ,'Gruszka'	,	0.60	,	2.10	,	10	),
(	460	, current_timestamp, current_timestamp,0,	38.00	,	11.90	,	0.60	        ,'Gujawa'	,	0.80	,	4.70	,	10	),
(	461	, current_timestamp, current_timestamp,0,	238.00	,	62.30	,	2.10	        ,'Jabłka, suszone'	,	2.10	,	10.30	,	10	),
(	462	, current_timestamp, current_timestamp,0,	46.00	,	12.10	,	0.40	        ,'Jabłko'	,	0.40	,	2.00	,	10	),
(	463	, current_timestamp, current_timestamp,0,	85.00	,	18.00	,	NULL	        ,'Jarzębina słodka, owoce'	,	1.50	,	2.40	,	10	),
(	464	, current_timestamp, current_timestamp,0,	54.00	,	12.40	,	1.00	        ,'Jeżyny, surowe'	,	1.40	,	5.60	,	10	),
(	465	, current_timestamp, current_timestamp,0,	70.00	,	16.00	,	0.30	        ,'Kaki (persymona)'	,	0.60	,	2.50	,	10	),
(	466	, current_timestamp, current_timestamp,0,	56.00	,	13.90	,	0.50	        ,'Kiwi'	,	0.90	,	2.10	,	10	),
(	467	, current_timestamp, current_timestamp,0,	64.00	,	14.60	,	0.30	        ,'Kumkwat, surowy'	,	0.60	,	NULL	,	10	),
(	468	, current_timestamp, current_timestamp,0,	75.00	,	17.00	,	0.30	        ,'Liczi (śliwa chińska)'	,	0.90	,	1.60	,	10	),
(	469	, current_timestamp, current_timestamp,0,	39.00	,	1.90	,	2.40	        ,'Limonka, surowa'	,	0.50	,	NULL	,	10	),
(	470	, current_timestamp, current_timestamp,0,	64.00	,	15.00	,	NULL	        ,'Malinojeżyny, surowe'	,	1.10	,	1.10	,	10	),
(	471	, current_timestamp, current_timestamp,0,	29.00	,	12.00	,	0.30	        ,'Maliny'	,	1.30	,	6.70	,	10	),
(	472	, current_timestamp, current_timestamp,0,	29.00	,	12.00	,	0.30	        ,'Maliny, mrożone'	,	1.30	,	6.70	,	10	),
(	473	, current_timestamp, current_timestamp,0,	42.00	,	11.20	,	0.20	        ,'Mandarynki'	,	0.60	,	1.90	,	10	),
(	474	, current_timestamp, current_timestamp,0,	67.00	,	17.00	,	0.30	        ,'Mango'	,	0.50	,	1.70	,	10	),
(	475	, current_timestamp, current_timestamp,0,	63.00	,	9.50	,	0.40	        ,'Marakuja (passiflora), surowa'	,	2.40	,	1.50	,	10	),
(	476	, current_timestamp, current_timestamp,0,	36.00	,	8.40	,	0.30	        ,'Melon'	,	0.90	,	1.00	,	10	),
(	477	, current_timestamp, current_timestamp,0,	67.00	,	15.00	,	0.20	        ,'Mirabelki'	,	0.70	,	0.90	,	10	),
(	478	, current_timestamp, current_timestamp,0,	47.00	,	11.90	,	0.20	        ,'Morele'	,	0.90	,	1.70	,	10	),
(	479	, current_timestamp, current_timestamp,0,	284.00	,	72.20	,	1.20	        ,'Morele, suszone'	,	5.40	,	10.30	,	10	),
(	480	, current_timestamp, current_timestamp,0,	38.00	,	8.10	,	NULL	        ,'Morwa, całe owoce'	,	1.30	,	2.00	,	10	),
(	481	, current_timestamp, current_timestamp,0,	48.00	,	11.80	,	0.20	        ,'Nektarynka'	,	0.90	,	1.20	,	10	),
(	482	, current_timestamp, current_timestamp,0,	125.00	,	4.10	,	12.70	        ,'Oliwki zielone, konserwowe'	,	1.40	,	2.40	,	10	),
(	483	, current_timestamp, current_timestamp,0,	38.00	,	7.10	,	0.70	        ,'Owoce opuncji (figa kaktusowa)'	,	0.80	,	5.00	,	10	),
(	484	, current_timestamp, current_timestamp,0,	41.00	,	11.10	,	0.10	        ,'Papaja'	,	0.60	,	1.90	,	10	),
(	485	, current_timestamp, current_timestamp,0,	44.00	,	11.30	,	0.20	        ,'Pomarańcza'	,	0.90	,	1.90	,	10	),
(	486	, current_timestamp, current_timestamp,0,	33.00	,	13.10	,	0.20	        ,'Porzeczki białe'	,	1.00	,	6.40	,	10	),
(	487	, current_timestamp, current_timestamp,0,	35.00	,	14.90	,	0.20	        ,'Porzeczki czarne'	,	1.30	,	7.90	,	10	),
(	488	, current_timestamp, current_timestamp,0,	35.00	,	14.90	,	0.20	        ,'Porzeczki czarne, mrożone'	,	1.30	,	7.90	,	10	),
(	489	, current_timestamp, current_timestamp,0,	31.00	,	13.80	,	0.20	        ,'Porzeczki czerwone'	,	1.10	,	7.70	,	10	),
(	490	, current_timestamp, current_timestamp,0,	214.00	,	53.00	,	0.20	        ,'Powidła śliwkowe'	,	1.00	,	1.80	,	10	),
(	491	, current_timestamp, current_timestamp,0,	33.00	,	8.30	,	0.50	        ,'Poziomki'	,	0.80	,	2.00	,	10	),
(	492	, current_timestamp, current_timestamp,0,	277.00	,	71.20	,	0.50	        ,'Rodzynki, suszone'	,	2.30	,	6.50	,	10	),
(	493	, current_timestamp, current_timestamp,0,	264.00	,	65.00	,	0.10	        ,'Syrop truskawkowy'	,	0.20	,	0.40	,	10	),
(	494	, current_timestamp, current_timestamp,0,	45.00	,	11.70	,	0.20	        ,'Śliwki'	,	0.60	,	1.60	,	10	),
(	495	, current_timestamp, current_timestamp,0,	45.00	,	11.70	,	0.20	        ,'Śliwki bez pestek, mrożone'	,	0.60	,	1.60	,	10	),
(	496	, current_timestamp, current_timestamp,0,	267.00	,	68.90	,	1.20	        ,'Śliwki z pestką, suszone'	,	3.50	,	9.40	,	10	),
(	497	, current_timestamp, current_timestamp,0,	28.00	,	7.20	,	0.40	        ,'Truskawki'	,	0.70	,	1.80	,	10	),
(	498	, current_timestamp, current_timestamp,0,	28.00	,	7.20	,	0.40	        ,'Truskawki, mrożone'	,	0.70	,	1.80	,	10	),
(	499	, current_timestamp, current_timestamp,0,	69.00	,	17.60	,	0.20	        ,'Winogrona'	,	0.50	,	1.50	,	10	),
(	500	, current_timestamp, current_timestamp,0,	47.00	,	10.90	,	0.40	        ,'Wiśnie'	,	0.90	,	1.00	,	10	),
(	501	, current_timestamp, current_timestamp,0,	47.00	,	10.90	,	0.40	        ,'Wiśnie bez pestek, mrożone'	,	0.90	,	1.00	,	10	),
(	502	, current_timestamp, current_timestamp,0,	49.00	,	11.70	,	0.70	        ,'Żurawina'	,	0.60	,	3.10	,	10	),
(	503	, current_timestamp, current_timestamp,0,	23.00	,	2.70	,	0.60	        ,'Bazylia, świeża'	,	3.20	,	1.60	,	11	),
(	504	, current_timestamp, current_timestamp,0,	314.00	,	54.70	,	16.80	        ,'Chili w proszku'	,	12.30	,	34.20	,	11	),
(	505	, current_timestamp, current_timestamp,0,	325.00	,	58.20	,	13.80	        ,'Curry'	,	12.70	,	33.20	,	11	),
(	506	, current_timestamp, current_timestamp,0,	251.00	,	80.80	,	2.20	        ,'Cynamon, mielony'	,	3.90	,	53.90	,	11	),
(	507	, current_timestamp, current_timestamp,0,	295.00	,	50.20	,	7.20	        ,'Estragon suszony'	,	22.80	,	7.40	,	11	),
(	508	, current_timestamp, current_timestamp,0,	489.00	,	43.90	,	36.30	        ,'Gałka muszkatołowa, cała'	,	7.10	,	20.80	,	11	),
(	509	, current_timestamp, current_timestamp,0,	469.00	,	34.90	,	28.80	        ,'Gorczyca, nasiona'	,	24.90	,	14.70	,	11	),
(	510	, current_timestamp, current_timestamp,0,	363.00	,	63.60	,	17.20	        ,'Goździki, suszone'	,	5.80	,	34.60	,	11	),
(	511	, current_timestamp, current_timestamp,0,	348.00	,	84.10	,	0.00	        ,'Guma arabska'	,	1.40	,	NULL	,	11	),
(	512	, current_timestamp, current_timestamp,0,	61.00	,	11.00	,	0.80	        ,'Imbir, świeży'	,	2.50	,	NULL	,	11	),
(	513	, current_timestamp, current_timestamp,0,	333.00	,	71.90	,	4.70	        ,'Imbir, mielony'	,	7.10	,	12.50	,	11	),
(	514	, current_timestamp, current_timestamp,0,	415.00	,	52.00	,	20.20	        ,'Kapary'	,	6.00	,	NULL	,	11	),
(	515	, current_timestamp, current_timestamp,0,	311.00	,	68.50	,	6.70	        ,'Kardamon'	,	10.80	,	28.00	,	11	),
(	516	, current_timestamp, current_timestamp,0,	328.00	,	57.50	,	13.70	        ,'Kminek, nasiona'	,	12.60	,	38.00	,	11	),
(	517	, current_timestamp, current_timestamp,0,	298.00	,	55.00	,	17.80	        ,'Kolendra, nasiona'	,	12.40	,	41.90	,	11	),
(	518	, current_timestamp, current_timestamp,0,	323.00	,	58.40	,	6.40	        ,'Kozieradka, nasiona'	,	23.00	,	24.60	,	11	),
(	519	, current_timestamp, current_timestamp,0,	354.00	,	64.90	,	9.90	        ,'Kurkuma'	,	7.80	,	21.10	,	11	),
(	520	, current_timestamp, current_timestamp,0,	263.00	,	58.90	,	5.60	        ,'Majeranek, suszony'	,	14.30	,	40.30	,	11	),
(	521	, current_timestamp, current_timestamp,0,	88.00	,	17.00	,	NULL	        ,'Ocet balsamiczny'	,	0.50	,	0.00	,	11	),
(	522	, current_timestamp, current_timestamp,0,	306.00	,	64.40	,	10.30	        ,'Oregano suszone'	,	11.00	,	42.80	,	11	),
(	523	, current_timestamp, current_timestamp,0,	324.00	,	55.70	,	13.00	        ,'Papryka, suszona (przyprawa)'	,	14.80	,	37.40	,	11	),
(	524	, current_timestamp, current_timestamp,0,	335.00	,	62.70	,	8.60	        ,'Pieprz czarny'	,	11.80	,	20.20	,	11	),
(	525	, current_timestamp, current_timestamp,0,	55.00	,	6.50	,	0.10	        ,'Sos sojowy'	,	7.50	,	0.80	,	11	),
(	526	, current_timestamp, current_timestamp,0,	0.00	,	0.00	,	0.00	        ,'Sól biała'	,	0.00	,	0.00	,	11	),
(	527	, current_timestamp, current_timestamp,0,	348.00	,	85.80	,	0.00	        ,'Syrop glukozowy'	,	0.00	,	0.00	,	11	),
(	528	, current_timestamp, current_timestamp,0,	327.00	,	80.50	,	0.00	        ,'Syrop inulina'	,	0.00	,	0.00	,	11	),
(	529	, current_timestamp, current_timestamp,0,	274.00	,	67.90	,	0.00	        ,'Syrop klonowy'	,	0.00	,	0.80	,	11	),
(	530	, current_timestamp, current_timestamp,0,	285.00	,	64.00	,	7.40	        ,'Tymianek suszony'	,	9.10	,	37.00	,	11	),
(	531	, current_timestamp, current_timestamp,0,	341.00	,	74.80	,	7.00	        ,'Ziele angielskie'	,	5.60	,	21.60	,	11	),
(	532	, current_timestamp, current_timestamp,0,	78.00	,	0.00	,	0.70	        ,'Dorsz, świeży'	,	17.70	,	0.00	,	12	),
(	533	, current_timestamp, current_timestamp,0,	70.00	,	0.00	,	0.30	        ,'Dorsz, świeży, filet bez skóry'	,	16.50	,	0.00	,	12	),
(	534	, current_timestamp, current_timestamp,0,	94.00	,	0.00	,	0.50	        ,'Dorsz, wędzony'	,	22.10	,	0.00	,	12	),
(	535	, current_timestamp, current_timestamp,0,	83.00	,	0.00	,	1.80	        ,'Flądra, świeża'	,	16.50	,	0.00	,	12	),
(	536	, current_timestamp, current_timestamp,0,	86.00	,	0.00	,	1.90	        ,'Gładzica-płastuga, świeża'	,	17.10	,	0.00	,	12	),
(	537	, current_timestamp, current_timestamp,0,	98.00	,	0.00	,	1.90	        ,'Halibut biały, świeży'	,	20.10	,	0.00	,	12	),
(	538	, current_timestamp, current_timestamp,0,	81.00	,	NULL	,	1.90	        ,'Homary'	,	15.90	,	0.00	,	12	),
(	539	, current_timestamp, current_timestamp,0,	73.00	,	NULL	,	0.90	        ,'Kalmary'	,	16.10	,	0.00	,	12	),
(	540	, current_timestamp, current_timestamp,0,	105.00	,	NULL	,	3.60	        ,'Karmazyn atlantycki'	,	18.20	,	0.00	,	12	),
(	541	, current_timestamp, current_timestamp,0,	110.00	,	0.00	,	4.20	        ,'Karp, świeży'	,	18.00	,	0.00	,	12	),
(	542	, current_timestamp, current_timestamp,0,	115.00	,	NULL	,	6.50	        ,'Kawior namiastka'	,	14.00	,	0.00	,	12	),
(	543	, current_timestamp, current_timestamp,0,	244.00	,	NULL	,	15.50	        ,'Kawior naturalny'	,	26.10	,	0.00	,	12	),
(	544	, current_timestamp, current_timestamp,0,	87.00	,	NULL	,	1.40	        ,'Kraby'	,	18.60	,	0.00	,	12	),
(	545	, current_timestamp, current_timestamp,0,	92.00	,	NULL	,	2.50	        ,'Kraby w puszce'	,	17.40	,	0.00	,	12	),
(	546	, current_timestamp, current_timestamp,0,	84.00	,	1.30	,	1.10	        ,'Langusta'	,	17.20	,	0.00	,	12	),
(	547	, current_timestamp, current_timestamp,0,	116.00	,	NULL	,	5.50	        ,'Leszcz'	,	16.60	,	0.00	,	12	),
(	548	, current_timestamp, current_timestamp,0,	77.00	,	NULL	,	0.70	        ,'Lin'	,	17.70	,	0.00	,	12	),
(	549	, current_timestamp, current_timestamp,0,	201.00	,	0.00	,	13.60	        ,'Łosoś, świeży'	,	19.90	,	0.00	,	12	),
(	550	, current_timestamp, current_timestamp,0,	162.00	,	0.00	,	8.40	        ,'Łosoś, wędzony'	,	21.50	,	0.00	,	12	),
(	551	, current_timestamp, current_timestamp,0,	181.00	,	0.00	,	11.90	        ,'Makrela, świeża'	,	18.70	,	0.00	,	12	),
(	552	, current_timestamp, current_timestamp,0,	221.00	,	0.00	,	15.50	        ,'Makrela, wędzona'	,	20.70	,	0.00	,	12	),
(	553	, current_timestamp, current_timestamp,0,	54.00	,	NULL	,	1.30	        ,'Małże – małgiew'	,	10.50	,	0.00	,	12	),
(	554	, current_timestamp, current_timestamp,0,	69.00	,	2.40	,	2.00	        ,'Małże – omułek jadalny'	,	10.50	,	0.00	,	12	),
(	555	, current_timestamp, current_timestamp,0,	87.00	,	NULL	,	1.70	        ,'Mięso raków, w puszkach'	,	18.00	,	0.00	,	12	),
(	556	, current_timestamp, current_timestamp,0,	73.00	,	0.00	,	0.60	        ,'Mintaj, świeży'	,	16.60	,	0.00	,	12	),
(	557	, current_timestamp, current_timestamp,0,	89.00	,	0.00	,	2.20	        ,'Morszczuk, świeży'	,	17.20	,	0.00	,	12	),
(	558	, current_timestamp, current_timestamp,0,	82.00	,	0.00	,	0.80	        ,'Okoń, świeży'	,	18.40	,	0.00	,	12	),
(	559	, current_timestamp, current_timestamp,0,	66.00	,	4.80	,	1.20	        ,'Ostrygi'	,	9.00	,	0.00	,	12	),
(	560	, current_timestamp, current_timestamp,0,	178.00	,	8.60	,	11.90	        ,'Paprykarz „Szczeciński”'	,	9.90	,	0.70	,	12	),
(	561	, current_timestamp, current_timestamp,0,	265.00	,	8.80	,	21.30	        ,'Pasztet rybny'	,	10.60	,	0.60	,	12	),
(	562	, current_timestamp, current_timestamp,0,	151.00	,	1.20	,	10.60	        ,'Pasztet z ryb wędzonych'	,	12.90	,	0.10	,	12	),
(	563	, current_timestamp, current_timestamp,0,	97.00	,	0.00	,	2.10	        ,'Pstrąg strumieniowy, świeży'	,	19.20	,	0.00	,	12	),
(	564	, current_timestamp, current_timestamp,0,	160.00	,	0.00	,	9.60	        ,'Pstrąg tęczowy, świeży'	,	18.60	,	0.00	,	12	),
(	565	, current_timestamp, current_timestamp,0,	64.00	,	NULL	,	0.50	        ,'Raki (rzeczne)'	,	15.00	,	0.00	,	12	),
(	566	, current_timestamp, current_timestamp,0,	181.00	,	6.90	,	13.20	        ,'Sałatka pikantna z makreli'	,	10.20	,	1.30	,	12	),
(	567	, current_timestamp, current_timestamp,0,	187.00	,	7.20	,	13.90	        ,'Sałatka z dorsza'	,	9.80	,	1.30	,	12	),
(	568	, current_timestamp, current_timestamp,0,	84.00	,	0.00	,	0.70	        ,'Sandacz, świeży'	,	19.20	,	0.00	,	12	),
(	569	, current_timestamp, current_timestamp,0,	221.00	,	0.00	,	13.90	        ,'Sardynka w oleju'	,	24.10	,	0.00	,	12	),
(	570	, current_timestamp, current_timestamp,0,	162.00	,	1.40	,	9.90	        ,'Sardynka w pomidorach'	,	17.00	,	0.10	,	12	),
(	571	, current_timestamp, current_timestamp,0,	169.00	,	0.00	,	9.60	        ,'Sardynka, świeża'	,	20.60	,	0.00	,	12	),
(	572	, current_timestamp, current_timestamp,0,	100.00	,	NULL	,	3.20	        ,'Sieja'	,	17.80	,	0.00	,	12	),
(	573	, current_timestamp, current_timestamp,0,	83.00	,	0.00	,	1.40	        ,'Sola, świeża'	,	17.50	,	0.00	,	12	),
(	574	, current_timestamp, current_timestamp,0,	82.00	,	0.00	,	0.80	        ,'Szczupak, świeży'	,	18.40	,	0.00	,	12	),
(	575	, current_timestamp, current_timestamp,0,	104.00	,	3.00	,	7.00	        ,'Śledzie marynowane „Rolmopsy”'	,	8.00	,	0.60	,	12	),
(	576	, current_timestamp, current_timestamp,0,	192.00	,	3.40	,	12.60	        ,'Śledź marynowany'	,	16.50	,	0.00	,	12	),
(	577	, current_timestamp, current_timestamp,0,	301.00	,	0.00	,	26.50	        ,'Śledź w oleju'	,	16.40	,	0.00	,	12	),
(	578	, current_timestamp, current_timestamp,0,	160.00	,	4.60	,	9.70	        ,'Śledź w sosie pomidorowym'	,	13.80	,	0.10	,	12	),
(	579	, current_timestamp, current_timestamp,0,	96.00	,	5.30	,	6.20	        ,'Śledź w śmietanie'	,	5.50	,	0.60	,	12	),
(	580	, current_timestamp, current_timestamp,0,	215.00	,	0.00	,	14.30	        ,'Śledź wędzony, „Pikling”'	,	21.80	,	0.00	,	12	),
(	581	, current_timestamp, current_timestamp,0,	217.00	,	0.00	,	15.40	        ,'Śledź, solony'	,	19.80	,	0.00	,	12	),
(	582	, current_timestamp, current_timestamp,0,	161.00	,	0.00	,	10.70	        ,'Śledź, świeży'	,	16.30	,	0.00	,	12	),
(	583	, current_timestamp, current_timestamp,0,	190.00	,	0.00	,	9.00	        ,'Tuńczyk w oleju'	,	27.10	,	0.00	,	12	),
(	584	, current_timestamp, current_timestamp,0,	96.00	,	0.00	,	1.20	        ,'Tuńczyk w wodzie'	,	21.00	,	0.00	,	12	),
(	585	, current_timestamp, current_timestamp,0,	137.00	,	0.00	,	4.60	        ,'Tuńczyk, świeży'	,	23.70	,	0.00	,	12	),
(	586	, current_timestamp, current_timestamp,0,	82.00	,	NULL	,	1.70	        ,'Turbot'	,	16.70	,	0.00	,	12	),
(	587	, current_timestamp, current_timestamp,0,	77.00	,	NULL	,	0.60	        ,'Wątłusz/łupacz'	,	17.90	,	0.00	,	12	),
(	588	, current_timestamp, current_timestamp,0,	302.00	,	NULL	,	24.10	        ,'Wędzone płaty brzuszne rekina'	,	21.30	,	0.00	,	12	),
(	589	, current_timestamp, current_timestamp,0,	278.00	,	0.00	,	24.50	        ,'Węgorz, świeży'	,	15.00	,	0.00	,	12	),
(	590	, current_timestamp, current_timestamp,0,	326.00	,	0.00	,	28.60	        ,'Węgorz, wędzony'	,	17.90	,	0.00	,	12	),
(	591	, current_timestamp, current_timestamp,0,	80.00	,	NULL	,	1.90	        ,'Zębacz'	,	15.80	,	0.00	,	12	),
(	592	, current_timestamp, current_timestamp,0,	21.00	,	6.30	,	0.10	        ,'Bakłażan'	,	1.10	,	2.50	,	13	),
(	593	, current_timestamp, current_timestamp,0,	17.00	,	1.00	,	0.30	        ,'Bambus, kiełki'	,	2.50	,	NULL	,	13	),
(	594	, current_timestamp, current_timestamp,0,	108.00	,	24.10	,	0.60	        ,'Bataty'	,	1.60	,	3.10	,	13	),
(	595	, current_timestamp, current_timestamp,0,	17.00	,	5.50	,	0.50	        ,'Boćwina'	,	2.10	,	4.40	,	13	),
(	596	, current_timestamp, current_timestamp,0,	66.00	,	14.00	,	0.40	        ,'Bób'	,	7.10	,	5.80	,	13	),
(	597	, current_timestamp, current_timestamp,0,	63.00	,	13.40	,	0.40	        ,'Bób, mrożony'	,	6.80	,	5.60	,	13	),
(	598	, current_timestamp, current_timestamp,0,	27.00	,	5.20	,	0.40	        ,'Brokuły'	,	3.00	,	2.50	,	13	),
(	599	, current_timestamp, current_timestamp,0,	24.00	,	4.70	,	0.40	        ,'Brokuły, mrożone'	,	2.70	,	2.30	,	13	),
(	600	, current_timestamp, current_timestamp,0,	29.00	,	5.70	,	0.20	        ,'Brukiew'	,	1.20	,	2.90	,	13	),
(	601	, current_timestamp, current_timestamp,0,	37.00	,	8.70	,	0.50	        ,'Brukselka'	,	4.70	,	5.40	,	13	),
(	602	, current_timestamp, current_timestamp,0,	36.00	,	8.40	,	0.50	        ,'Brukselka, mrożona'	,	4.50	,	5.20	,	13	),
(	603	, current_timestamp, current_timestamp,0,	38.00	,	9.50	,	0.10	        ,'Burak'	,	1.80	,	2.20	,	13	),
(	604	, current_timestamp, current_timestamp,0,	34.00	,	8.60	,	0.10	        ,'Buraki purée, mrożone'	,	1.60	,	2.00	,	13	),
(	605	, current_timestamp, current_timestamp,0,	30.00	,	6.90	,	0.40	        ,'Cebula'	,	1.40	,	1.70	,	13	),
(	606	, current_timestamp, current_timestamp,0,	52.00	,	12.40	,	0.20	        ,'Cebula, konserwowa'	,	0.70	,	0.80	,	13	),
(	607	, current_timestamp, current_timestamp,0,	28.00	,	6.20	,	0.40	        ,'Cebula, mrożona'	,	1.30	,	1.50	,	13	),
(	608	, current_timestamp, current_timestamp,0,	23.00	,	3.00	,	0.50	        ,'Cebulki perłowe'	,	2.00	,	1.50	,	13	),
(	609	, current_timestamp, current_timestamp,0,	67.00	,	18.10	,	0.60	        ,'Chrzan'	,	4.50	,	7.30	,	13	),
(	610	, current_timestamp, current_timestamp,0,	144.00	,	25.50	,	0.70	        ,'Ciecierzyca, kiełki'	,	8.80	,	2.80	,	13	),
(	611	, current_timestamp, current_timestamp,0,	15.00	,	3.20	,	0.10	        ,'Cukinia'	,	1.20	,	1.00	,	13	),
(	612	, current_timestamp, current_timestamp,0,	15.00	,	3.20	,	0.10	        ,'Cukinia, mrożona'	,	1.20	,	1.00	,	13	),
(	613	, current_timestamp, current_timestamp,0,	21.00	,	4.10	,	0.20	        ,'Cykoria'	,	1.70	,	1.00	,	13	),
(	614	, current_timestamp, current_timestamp,0,	146.00	,	32.60	,	0.50	        ,'Czosnek'	,	6.40	,	4.10	,	13	),
(	615	, current_timestamp, current_timestamp,0,	28.00	,	7.70	,	0.30	        ,'Dynia'	,	1.30	,	2.80	,	13	),
(	616	, current_timestamp, current_timestamp,0,	14.00	,	1.20	,	0.20	        ,'Endywia, surowa'	,	1.80	,	1.20	,	13	),
(	617	, current_timestamp, current_timestamp,0,	288.00	,	61.60	,	1.60	        ,'Fasola biała, nasiona suche'	,	21.40	,	15.70	,	13	),
(	618	, current_timestamp, current_timestamp,0,	16.00	,	4.50	,	0.20	        ,'Fasola cięta, konserwowa, bez zalewy'	,	1.50	,	2.40	,	13	),
(	619	, current_timestamp, current_timestamp,0,	29.00	,	6.20	,	0.40	        ,'Fasola mung, kiełki'	,	3.00	,	3.00	,	13	),
(	620	, current_timestamp, current_timestamp,0,	27.00	,	7.60	,	0.20	        ,'Fasola szparagowa'	,	2.40	,	3.90	,	13	),
(	621	, current_timestamp, current_timestamp,0,	61.00	,	15.00	,	0.20	        ,'Fasolka flageolot, konserwowa'	,	6.30	,	6.70	,	13	),
(	622	, current_timestamp, current_timestamp,0,	24.00	,	6.80	,	0.20	        ,'Fasolka szparagowa, mrożona'	,	2.20	,	3.50	,	13	),
(	623	, current_timestamp, current_timestamp,0,	293.00	,	60.20	,	1.40	        ,'Groch, nasiona suche'	,	23.80	,	15.00	,	13	),
(	624	, current_timestamp, current_timestamp,0,	75.00	,	17.00	,	0.40	        ,'Groszek zielony'	,	6.70	,	6.00	,	13	),
(	625	, current_timestamp, current_timestamp,0,	63.00	,	15.80	,	0.20	        ,'Groszek zielony, konserwowy, bez zalewy'	,	4.90	,	5.70	,	13	),
(	626	, current_timestamp, current_timestamp,0,	72.00	,	16.30	,	0.40	        ,'Groszek zielony, mrożony'	,	6.40	,	5.80	,	13	),
(	627	, current_timestamp, current_timestamp,0,	29.00	,	6.10	,	0.70	        ,'Jarmuż'	,	3.30	,	3.80	,	13	),
(	628	, current_timestamp, current_timestamp,0,	22.00	,	5.00	,	0.20	        ,'Kalafior'	,	2.40	,	2.40	,	13	),
(	629	, current_timestamp, current_timestamp,0,	20.00	,	4.50	,	0.20	        ,'Kalafior, mrożony'	,	2.20	,	2.20	,	13	),
(	630	, current_timestamp, current_timestamp,0,	29.00	,	6.50	,	0.30	        ,'Kalarepa'	,	2.20	,	2.20	,	13	),
(	631	, current_timestamp, current_timestamp,0,	27.00	,	5.90	,	0.30	        ,'Kalarepa, mrożona'	,	2.00	,	2.00	,	13	),
(	632	, current_timestamp, current_timestamp,0,	29.00	,	7.40	,	0.20	        ,'Kapusta biała'	,	1.70	,	2.50	,	13	),
(	633	, current_timestamp, current_timestamp,0,	26.00	,	6.70	,	0.20	        ,'Kapusta biała, mrożona'	,	1.50	,	2.30	,	13	),
(	634	, current_timestamp, current_timestamp,0,	17.00	,	3.00	,	0.30	        ,'Kapusta chińska'	,	1.20	,	1.30	,	13	),
(	635	, current_timestamp, current_timestamp,0,	27.00	,	6.70	,	0.20	        ,'Kapusta czerwona'	,	1.90	,	2.50	,	13	),
(	636	, current_timestamp, current_timestamp,0,	12.00	,	3.40	,	0.20	        ,'Kapusta kwaszona'	,	1.10	,	2.10	,	13	),
(	637	, current_timestamp, current_timestamp,0,	12.00	,	3.20	,	0.20	        ,'Kapusta pekińska'	,	1.20	,	1.90	,	13	),
(	638	, current_timestamp, current_timestamp,0,	38.00	,	7.80	,	0.40	        ,'Kapusta włoska'	,	3.30	,	2.60	,	13	),
(	639	, current_timestamp, current_timestamp,0,	35.00	,	7.00	,	0.40	        ,'Kapusta włoska, mrożona'	,	3.00	,	2.30	,	13	),
(	640	, current_timestamp, current_timestamp,0,	22.00	,	2.60	,	0.10	        ,'Karczochy surowe'	,	2.40	,	10.80	,	13	),
(	641	, current_timestamp, current_timestamp,0,	302.00	,	50.70	,	7.80	        ,'Kiełki pszenicy'	,	24.40	,	33.40	,	13	),
(	642	, current_timestamp, current_timestamp,0,	92.00	,	16.70	,	1.50	        ,'Koncentrat pomidorowy, 30%'	,	5.60	,	2.80	,	13	),
(	643	, current_timestamp, current_timestamp,0,	26.00	,	6.10	,	0.40	        ,'Koper ogrodowy'	,	2.80	,	3.30	,	13	),
(	644	, current_timestamp, current_timestamp,0,	24.00	,	2.80	,	0.30	        ,'Koper włoski'	,	2.40	,	4.20	,	13	),
(	645	, current_timestamp, current_timestamp,0,	110.00	,	23.40	,	1.50	        ,'Kukurydza, kolby'	,	3.70	,	3.30	,	13	),
(	646	, current_timestamp, current_timestamp,0,	105.00	,	22.50	,	1.40	        ,'Kukurydza, kolby, mrożona'	,	3.60	,	3.20	,	13	),
(	647	, current_timestamp, current_timestamp,0,	102.00	,	23.60	,	1.20	        ,'Kukurydza, konserwowa'	,	2.90	,	3.90	,	13	),
(	648	, current_timestamp, current_timestamp,0,	27.00	,	2.40	,	0.60	        ,'Liście mniszka lekarskiego'	,	2.90	,	3.00	,	13	),
(	649	, current_timestamp, current_timestamp,0,	31.00	,	2.10	,	0.70	        ,'Lucerna, świeże kiełki'	,	4.00	,	1.60	,	13	),
(	650	, current_timestamp, current_timestamp,0,	27.00	,	8.70	,	0.20	        ,'Marchew'	,	1.00	,	3.60	,	13	),
(	651	, current_timestamp, current_timestamp,0,	24.00	,	7.80	,	0.20	        ,'Marchew, mrożona'	,	0.90	,	3.20	,	13	),
(	652	, current_timestamp, current_timestamp,0,	371.00	,	38.40	,	1.20	        ,'Mąka sojowa odtłuszczona'	,	47.00	,	17.50	,	13	),
(	653	, current_timestamp, current_timestamp,0,	424.00	,	20.10	,	23.50	        ,'Mąka sojowa pełnotłusta'	,	45.00	,	11.90	,	13	),
(	654	, current_timestamp, current_timestamp,0,	13.00	,	2.90	,	0.10	        ,'Ogórek'	,	0.70	,	0.50	,	13	),
(	655	, current_timestamp, current_timestamp,0,	11.00	,	1.90	,	0.10	        ,'Ogórek kwaszony'	,	1.00	,	0.50	,	13	),
(	656	, current_timestamp, current_timestamp,0,	41.00	,	9.90	,	0.10	        ,'Ogórki z papryką, konserwowe'	,	0.30	,	0.30	,	13	),
(	657	, current_timestamp, current_timestamp,0,	24.00	,	5.60	,	0.10	        ,'Ogórki, konserwowe'	,	0.30	,	0.20	,	13	),
(	658	, current_timestamp, current_timestamp,0,	28.00	,	6.60	,	0.50	        ,'Papryka czerwona'	,	1.30	,	2.00	,	13	),
(	659	, current_timestamp, current_timestamp,0,	30.00	,	5.00	,	1.50	        ,'Papryka czerwona, konserwowa'	,	0.80	,	1.80	,	13	),
(	660	, current_timestamp, current_timestamp,0,	28.00	,	6.60	,	0.50	        ,'Papryka czerwona, mrożona'	,	1.30	,	2.00	,	13	),
(	661	, current_timestamp, current_timestamp,0,	18.00	,	4.60	,	0.30	        ,'Papryka zielona'	,	1.10	,	2.00	,	13	),
(	662	, current_timestamp, current_timestamp,0,	57.00	,	15.50	,	0.60	        ,'Pasternak'	,	1.60	,	4.50	,	13	),
(	663	, current_timestamp, current_timestamp,0,	38.00	,	10.50	,	0.50	        ,'Pietruszka, korzeń'	,	2.60	,	4.90	,	13	),
(	664	, current_timestamp, current_timestamp,0,	34.00	,	9.50	,	0.50	        ,'Pietruszka, korzeń, mrożona'	,	2.30	,	4.40	,	13	),
(	665	, current_timestamp, current_timestamp,0,	41.00	,	9.00	,	0.40	        ,'Pietruszka, liście'	,	4.40	,	4.20	,	13	),
(	666	, current_timestamp, current_timestamp,0,	62.00	,	15.50	,	0.20	        ,'Pikle, konserwowe'	,	1.30	,	1.90	,	13	),
(	667	, current_timestamp, current_timestamp,0,	335.00	,	78.20	,	2.50	        ,'Płatki ziemniaczane'	,	6.70	,	8.00	,	13	),
(	668	, current_timestamp, current_timestamp,0,	44.00	,	1.30	,	0.60	        ,'Pokrzywa'	,	7.00	,	3.10	,	13	),
(	669	, current_timestamp, current_timestamp,0,	15.00	,	3.60	,	0.20	        ,'Pomidor'	,	0.90	,	1.20	,	13	),
(	670	, current_timestamp, current_timestamp,0,	24.00	,	5.70	,	0.30	        ,'Por'	,	2.20	,	2.70	,	13	),
(	671	, current_timestamp, current_timestamp,0,	24.00	,	5.70	,	0.30	        ,'Por, mrożony'	,	2.20	,	2.70	,	13	),
(	672	, current_timestamp, current_timestamp,0,	11.00	,	0.60	,	0.30	        ,'Portulaka'	,	1.50	,	2.00	,	13	),
(	673	, current_timestamp, current_timestamp,0,	324.00	,	77.30	,	1.40	        ,'Pyzy ziemniaczane w proszku'	,	5.10	,	5.80	,	13	),
(	674	, current_timestamp, current_timestamp,0,	9.00	,	4.60	,	0.10	        ,'Rabarbar'	,	0.50	,	3.20	,	13	),
(	675	, current_timestamp, current_timestamp,0,	14.00	,	0.70	,	0.40	        ,'Roszponka'	,	1.80	,	1.50	,	13	),
(	676	, current_timestamp, current_timestamp,0,	18.00	,	2.30	,	0.30	        ,'Rukiew wodna'	,	1.60	,	1.50	,	13	),
(	677	, current_timestamp, current_timestamp,0,	24.00	,	2.10	,	0.70	        ,'Rukola'	,	2.60	,	1.60	,	13	),
(	678	, current_timestamp, current_timestamp,0,	26.00	,	8.20	,	0.30	        ,'Rzepa'	,	1.10	,	3.50	,	13	),
(	679	, current_timestamp, current_timestamp,0,	33.00	,	2.50	,	0.70	        ,'Rzeżucha'	,	4.20	,	3.50	,	13	),
(	680	, current_timestamp, current_timestamp,0,	20.00	,	4.20	,	0.10	        ,'Rzodkiew biała'	,	1.30	,	1.60	,	13	),
(	681	, current_timestamp, current_timestamp,0,	14.00	,	4.40	,	0.20	        ,'Rzodkiewka'	,	1.00	,	2.50	,	13	),
(	682	, current_timestamp, current_timestamp,0,	14.00	,	2.90	,	0.20	        ,'Sałata'	,	1.40	,	1.40	,	13	),
(	683	, current_timestamp, current_timestamp,0,	13.00	,	1.90	,	0.30	        ,'Sałata lodowa'	,	0.70	,	0.60	,	13	),
(	684	, current_timestamp, current_timestamp,0,	36.00	,	8.60	,	0.10	        ,'Sałatka szwedzka, konserwowa'	,	0.40	,	0.30	,	13	),
(	685	, current_timestamp, current_timestamp,0,	88.00	,	21.90	,	0.10	        ,'Sałatka z czerwonej kapusty, konserwowa'	,	1.10	,	1.50	,	13	),
(	686	, current_timestamp, current_timestamp,0,	21.00	,	7.70	,	0.30	        ,'Seler korzeniowy'	,	1.60	,	4.90	,	13	),
(	687	, current_timestamp, current_timestamp,0,	18.00	,	6.90	,	0.30	        ,'Seler korzeniowy, mrożony'	,	1.40	,	4.40	,	13	),
(	688	, current_timestamp, current_timestamp,0,	13.00	,	3.60	,	0.20	        ,'Seler naciowy'	,	1.00	,	1.80	,	13	),
(	689	, current_timestamp, current_timestamp,0,	16.00	,	1.60	,	0.40	        ,'Skorzonera'	,	1.40	,	17.00	,	13	),
(	690	, current_timestamp, current_timestamp,0,	343.00	,	83.90	,	0.10	        ,'Skrobia ziemniaczana'	,	0.60	,	0.40	,	13	),
(	691	, current_timestamp, current_timestamp,0,	327.00	,	57.50	,	3.00	        ,'Soczewica czerwona, nasiona suche'	,	25.40	,	8.90	,	13	),
(	692	, current_timestamp, current_timestamp,0,	119.00	,	22.10	,	0.60	        ,'Soczewica, kiełki'	,	9.00	,	3.00	,	13	),
(	693	, current_timestamp, current_timestamp,0,	141.00	,	9.60	,	6.70	        ,'Soja, kiełki'	,	13.10	,	2.60	,	13	),
(	694	, current_timestamp, current_timestamp,0,	382.00	,	32.70	,	19.60	        ,'Soja, nasiona suche'	,	34.30	,	15.70	,	13	),
(	695	, current_timestamp, current_timestamp,0,	93.00	,	22.20	,	1.00	        ,'Sos keczup'	,	1.80	,	3.20	,	13	),
(	696	, current_timestamp, current_timestamp,0,	21.00	,	4.90	,	0.80	        ,'Szczaw'	,	1.10	,	2.60	,	13	),
(	697	, current_timestamp, current_timestamp,0,	29.00	,	3.90	,	0.80	        ,'Szczypiorek'	,	4.10	,	2.50	,	13	),
(	698	, current_timestamp, current_timestamp,0,	18.00	,	3.70	,	0.20	        ,'Szparagi'	,	1.90	,	1.50	,	13	),
(	699	, current_timestamp, current_timestamp,0,	19.00	,	2.50	,	0.70	        ,'Szparagi, konserwowe'	,	2.10	,	1.50	,	13	),
(	700	, current_timestamp, current_timestamp,0,	16.00	,	3.00	,	0.40	        ,'Szpinak'	,	2.60	,	2.60	,	13	),
(	701	, current_timestamp, current_timestamp,0,	15.00	,	2.70	,	0.40	        ,'Szpinak, mrożony'	,	2.30	,	2.30	,	13	),
(	702	, current_timestamp, current_timestamp,0,	76.00	,	2.20	,	4.20	        ,'Tofu'	,	7.80	,	1.00	,	13	),
(	703	, current_timestamp, current_timestamp,0,	30.00	,	4.00	,	0.40	        ,'Topinambur (słonecznik bulwiasty)'	,	2.40	,	12.10	,	13	),
(	704	, current_timestamp, current_timestamp,0,	69.00	,	16.50	,	0.10	        ,'Ziemniaki, mrożone'	,	1.70	,	1.40	,	13	),
(	705	, current_timestamp, current_timestamp,0,	85.00	,	20.50	,	0.10	        ,'Ziemniaki, późne'	,	1.90	,	1.60	,	13	),
(	706	, current_timestamp, current_timestamp,0,	77.00	,	18.30	,	0.10	        ,'Ziemniaki, średnio'	,	1.90	,	1.50	,	13	),
(	707	, current_timestamp, current_timestamp,0,	69.00	,	16.30	,	0.10	        ,'Ziemniaki, wczesne'	,	1.80	,	1.30	,	13	),
(	708	, current_timestamp, current_timestamp,0,	166.00	,	30.00	,	0.00	        ,'Likiery (ok. 30 procentowe)'	,	NULL	,	0.00	,	14	),
(	709	, current_timestamp, current_timestamp,0,	37.00	,	4.30	,	0.00	        ,'Piwo ciemne, 10%'	,	0.30	,	0.00	,	14	),
(	710	, current_timestamp, current_timestamp,0,	38.00	,	4.00	,	0.00	        ,'Piwo jasne, 10 %'	,	0.30	,	0.00	,	14	),
(	711	, current_timestamp, current_timestamp,0,	45.00	,	5.30	,	0.00	        ,'Piwo jasne, ciemne 12%'	,	0.40	,	0.00	,	14	),
(	712	, current_timestamp, current_timestamp,0,	27.00	,	2.00	,	0.00	        ,'Piwo lekkie (niedofermentowane)'	,	0.40	,	0.00	,	14	),
(	713	, current_timestamp, current_timestamp,0,	43.00	,	2.80	,	0.00	        ,'Piwo leżakowane (pełne), jasne'	,	0.50	,	0.00	,	14	),
(	714	, current_timestamp, current_timestamp,0,	43.00	,	3.10	,	0.00	        ,'Piwo leżakowane, pilzneńskie'	,	0.50	,	0.00	,	14	),
(	715	, current_timestamp, current_timestamp,0,	49.00	,	3.80	,	0.00	        ,'Piwo pełne'	,	0.50	,	0.00	,	14	),
(	716	, current_timestamp, current_timestamp,0,	42.00	,	NULL	,	0.00	        ,'Piwo kolońskie'	,	0.40	,	0.00	,	14	),
(	717	, current_timestamp, current_timestamp,0,	46.00	,	3.00	,	0.00	        ,'Piwo pszeniczne pełne'	,	0.50	,	0.00	,	14	),
(	718	, current_timestamp, current_timestamp,0,	48.00	,	8.60	,	0.00	        ,'Piwo słodowe'	,	0.40	,	0.00	,	14	),
(	719	, current_timestamp, current_timestamp,0,	521.00	,	0.00	,	0.00	        ,'Spirytus rektyfikowany'	,	0.00	,	0.00	,	14	),
(	720	, current_timestamp, current_timestamp,0,	76.00	,	1.40	,	0.00	        ,'Szampan'	,	0.30	,	0.00	,	14	),
(	721	, current_timestamp, current_timestamp,0,	155.00	,	15.90	,	0.00	        ,'Wermut słodki'	,	0.00	,	0.00	,	14	),
(	722	, current_timestamp, current_timestamp,0,	250.00	,	0.10	,	0.00	        ,'Whisky'	,	0.00	,	0.00	,	14	),
(	723	, current_timestamp, current_timestamp,0,	240.00	,	2.00	,	0.00	        ,'Winiak'	,	NULL	,	0.00	,	14	),
(	724	, current_timestamp, current_timestamp,0,	81.00	,	3.70	,	0.00	        ,'Wino białe, półwytrawne'	,	0.00	,	0.00	,	14	),
(	725	, current_timestamp, current_timestamp,0,	95.00	,	5.90	,	0.00	        ,'Wino białe, słodkie'	,	0.20	,	0.00	,	14	),
(	726	, current_timestamp, current_timestamp,0,	66.00	,	0.60	,	0.00	        ,'Wino białe, wytrawne'	,	0.10	,	0.00	,	14	),
(	727	, current_timestamp, current_timestamp,0,	68.00	,	0.20	,	0.00	        ,'Wino czerwone'	,	0.10	,	0.00	,	14	),
(	728	, current_timestamp, current_timestamp,0,	160.00	,	15.00	,	0.00	        ,'Wino deserowe'	,	0.10	,	0.00	,	14	),
(	729	, current_timestamp, current_timestamp,0,	83.00	,	5.00	,	0.00	        ,'Wino musujące, białe'	,	0.10	,	0.00	,	14	),
(	730	, current_timestamp, current_timestamp,0,	74.00	,	5.00	,	0.00	        ,'Wino owocowe'	,	NULL	,	0.00	,	14	),
(	731	, current_timestamp, current_timestamp,0,	220.00	,	0.00	,	0.00	        ,'Wódki – średnio'	,	0.00	,	0.00	,	14	),
(	732	, current_timestamp, current_timestamp,0,	42.00	,	10.40	,	0.00	        ,'Coca cola, pepsi cola'	,	0.00	,	0.00	,	15	),
(	733	, current_timestamp, current_timestamp,0,	0.00	,	0.00	,	0.00	        ,'Herbata, napar bez cukru'	,	0.10	,	0.00	,	15	),
(	734	, current_timestamp, current_timestamp,0,	2.00	,	0.30	,	0.00	        ,'Kawa, napar bez cukru'	,	0.20	,	0.00	,	15	),
(	735	, current_timestamp, current_timestamp,0,	24.00	,	5.80	,	0.00	        ,'Lemoniada'	,	0.00	,	0.00	,	15	),
(	736	, current_timestamp, current_timestamp,0,	42.00	,	10.30	,	0.00	        ,'Napoje gazowane o smaku owocowym'	,	0.00	,	0.00	,	15	),
(	737	, current_timestamp, current_timestamp,0,	42.00	,	10.10	,	0.10	        ,'Napój jabłkowo-miętowy'	,	0.00	,	0.20	,	15	),
(	738	, current_timestamp, current_timestamp,0,	36.00	,	9.10	,	0.00	        ,'Napój winogronowy'	,	0.00	,	0.20	,	15	),
(	739	, current_timestamp, current_timestamp,0,	48.00	,	11.40	,	0.10	        ,'Sok ananasowy'	,	0.30	,	0.10	,	15	),
(	740	, current_timestamp, current_timestamp,0,	30.00	,	6.40	,	0.30	        ,'Sok cytrynowy'	,	0.40	,	0.10	,	15	),
(	741	, current_timestamp, current_timestamp,0,	40.00	,	9.20	,	0.10	        ,'Sok grejpfrutowy'	,	0.50	,	0.10	,	15	),
(	742	, current_timestamp, current_timestamp,0,	42.00	,	10.00	,	0.10	        ,'Sok jabłkowy'	,	0.10	,	0.00	,	15	),
(	743	, current_timestamp, current_timestamp,0,	44.00	,	11.30	,	0.10	        ,'Sok marchwiowo-brzoskwiniowy'	,	0.50	,	1.30	,	15	),
(	744	, current_timestamp, current_timestamp,0,	44.00	,	11.80	,	0.20	        ,'Sok marchwiowo-jabłkowo-pomarańczowy'	,	0.60	,	1.90	,	15	),
(	745	, current_timestamp, current_timestamp,0,	46.00	,	12.30	,	0.30	        ,'Sok marchwiowo-jabłkowy'	,	0.50	,	2.20	,	15	),
(	746	, current_timestamp, current_timestamp,0,	40.00	,	10.80	,	0.10	        ,'Sok marchwiowo-pomarańczowy'	,	0.60	,	1.70	,	15	),
(	747	, current_timestamp, current_timestamp,0,	43.00	,	11.30	,	0.10	        ,'Sok marchwiowy'	,	0.40	,	1.30	,	15	),
(	748	, current_timestamp, current_timestamp,0,	43.00	,	9.90	,	0.10	        ,'Sok pomarańczowy'	,	0.60	,	0.10	,	15	),
(	749	, current_timestamp, current_timestamp,0,	14.00	,	3.30	,	0.10	        ,'Sok pomidorowy'	,	0.80	,	0.40	,	15	),
(	750	, current_timestamp, current_timestamp,0,	25.00	,	5.70	,	0.30	        ,'Sok wielowarzywny'	,	1.00	,	1.20	,	15	),
(	751	, current_timestamp, current_timestamp,0,	22.00	,	4.50	,	0.30	        ,'Sok z aceroli'	,	0.30	,	NULL	,	15	),
(	752	, current_timestamp, current_timestamp,0,	52.00	,	14.00	,	0.30	        ,'Sok z marchwi, jabłek i owoców tropikalnych'	,	0.70	,	2.60	,	15	),
(	753	, current_timestamp, current_timestamp,0,	437.00	,	56.10	,	20.40	        ,'Babeczki z kremem śmietankowym'	,	8.10	,	1.10	,	16	),
(	754	, current_timestamp, current_timestamp,0,	341.00	,	67.10	,	4.20	        ,'Babka biszkoptowa'	,	8.50	,	0.80	,	16	),
(	755	, current_timestamp, current_timestamp,0,	368.00	,	55.10	,	13.40	        ,'Babka drożdżowa luksusowa'	,	8.00	,	1.80	,	16	),
(	756	, current_timestamp, current_timestamp,0,	448.00	,	56.70	,	25.20	        ,'Baton Bounty Milk'	,	4.20	,	5.40	,	16	),
(	757	, current_timestamp, current_timestamp,0,	451.00	,	68.90	,	18.20	        ,'Baton Mars'	,	3.60	,	1.00	,	16	),
(	758	, current_timestamp, current_timestamp,0,	448.00	,	71.80	,	16.20	        ,'Baton Milky Way'	,	3.60	,	0.50	,	16	),
(	759	, current_timestamp, current_timestamp,0,	497.00	,	52.60	,	28.90	        ,'Baton Snickers'	,	9.70	,	2.90	,	16	),
(	760	, current_timestamp, current_timestamp,0,	483.00	,	64.20	,	23.20	        ,'Baton Twi,'	,	5.30	,	1.00	,	16	),
(	761	, current_timestamp, current_timestamp,0,	320.00	,	70.00	,	2.50	        ,'Budyń czekoladowy, w proszku'	,	4.50	,	NULL	,	16	),
(	762	, current_timestamp, current_timestamp,0,	346.00	,	86.00	,	0.00	        ,'Budyń waniliowy, śmietankowy, w proszku'	,	0.50	,	NULL	,	16	),
(	763	, current_timestamp, current_timestamp,0,	272.00	,	47.30	,	7.20	        ,'Bułeczki drożdżowe z jabłkami'	,	6.20	,	2.20	,	16	),
(	764	, current_timestamp, current_timestamp,0,	343.00	,	65.20	,	6.50	        ,'Bułeczki drożdżowe z powidłami śliwkowymi'	,	7.00	,	2.00	,	16	),
(	765	, current_timestamp, current_timestamp,0,	352.00	,	63.80	,	8.10	        ,'Bułeczki drożdżowe, z nadzieniem makowym'	,	7.80	,	2.60	,	16	),
(	766	, current_timestamp, current_timestamp,0,	339.00	,	61.70	,	6.90	        ,'Bułeczki drożdżowe, z nadzieniem serowym'	,	8.50	,	1.80	,	16	),
(	767	, current_timestamp, current_timestamp,0,	270.00	,	45.90	,	7.00	        ,'Bułeczki z jabłkiem i kruszonką'	,	6.70	,	1.50	,	16	),
(	768	, current_timestamp, current_timestamp,0,	517.00	,	45.70	,	33.50	        ,'Chałwa kakaowa'	,	14.60	,	5.90	,	16	),
(	769	, current_timestamp, current_timestamp,0,	516.00	,	46.40	,	33.10	        ,'Chałwa waniliowa'	,	14.20	,	5.70	,	16	),
(	770	, current_timestamp, current_timestamp,0,	510.00	,	39.80	,	34.40	        ,'Chałwa z bakaliami'	,	16.50	,	5.60	,	16	),
(	771	, current_timestamp, current_timestamp,0,	537.00	,	38.70	,	37.40	        ,'Chałwa z orzechami'	,	17.70	,	5.70	,	16	),
(	772	, current_timestamp, current_timestamp,0,	537.00	,	52.20	,	38.00	        ,'Chipsy bekonowe'	,	5.90	,	8.70	,	16	),
(	773	, current_timestamp, current_timestamp,0,	549.00	,	50.40	,	40.00	        ,'Chipsy paprykowe'	,	6.00	,	8.40	,	16	),
(	774	, current_timestamp, current_timestamp,0,	552.00	,	49.90	,	40.70	        ,'Chipsy solone'	,	5.60	,	8.30	,	16	),
(	775	, current_timestamp, current_timestamp,0,	456.00	,	40.70	,	30.80	        ,'Ciastka „Karpatki”'	,	4.90	,	0.40	,	16	),
(	776	, current_timestamp, current_timestamp,0,	348.00	,	43.50	,	16.90	        ,'Ciastka „Napoleonki”'	,	6.10	,	0.70	,	16	),
(	777	, current_timestamp, current_timestamp,0,	383.00	,	58.50	,	13.60	        ,'Ciastka drożdżowe z truskawkami'	,	8.00	,	1.80	,	16	),
(	778	, current_timestamp, current_timestamp,0,	435.00	,	45.40	,	26.60	        ,'Ciastka francuskie ze śliwkami'	,	5.30	,	1.60	,	16	),
(	779	, current_timestamp, current_timestamp,0,	393.00	,	55.30	,	17.30	        ,'Ciastka ponczowe z kremem'	,	4.60	,	0.80	,	16	),
(	780	, current_timestamp, current_timestamp,0,	275.00	,	47.10	,	8.80	        ,'Ciastka tortowe z owocami świeżymi'	,	3.30	,	1.90	,	16	),
(	781	, current_timestamp, current_timestamp,0,	290.00	,	47.70	,	8.00	        ,'Ciasto drożdżowe'	,	7.70	,	1.50	,	16	),
(	782	, current_timestamp, current_timestamp,0,	435.00	,	51.40	,	23.60	        ,'Ciasto kruche podstawowe'	,	5.50	,	1.10	,	16	),
(	783	, current_timestamp, current_timestamp,0,	405.00	,	99.80	,	0.00	        ,'Cukier'	,	0.00	,	0.00	,	16	),
(	784	, current_timestamp, current_timestamp,0,	531.00	,	64.00	,	28.90	        ,'Czekolada deserowa'	,	5.30	,	1.40	,	16	),
(	785	, current_timestamp, current_timestamp,0,	554.00	,	56.60	,	34.30	        ,'Czekolada gorzka'	,	6.70	,	1.70	,	16	),
(	786	, current_timestamp, current_timestamp,0,	526.00	,	62.70	,	29.00	        ,'Czekolada kawowa'	,	5.50	,	1.80	,	16	),
(	787	, current_timestamp, current_timestamp,0,	549.00	,	54.70	,	32.80	        ,'Czekolada mleczna'	,	9.80	,	0.70	,	16	),
(	788	, current_timestamp, current_timestamp,0,	539.00	,	57.30	,	30.90	        ,'Czekolada mleczna z orzechami laskowymi'	,	8.60	,	0.40	,	16	),
(	789	, current_timestamp, current_timestamp,0,	450.00	,	68.80	,	17.60	        ,'Czekolada nadziewana'	,	3.90	,	0.30	,	16	),
(	790	, current_timestamp, current_timestamp,0,	585.00	,	45.70	,	42.30	        ,'Czekolada śmietankowa z orzechami laskowymi'	,	8.60	,	2.30	,	16	),
(	791	, current_timestamp, current_timestamp,0,	327.00	,	52.80	,	11.20	        ,'Delicje szampańskie'	,	4.10	,	0.70	,	16	),
(	792	, current_timestamp, current_timestamp,0,	326.00	,	35.50	,	18.00	        ,'Eklery z bitą śmietaną'	,	5.90	,	0.40	,	16	),
(	793	, current_timestamp, current_timestamp,0,	511.00	,	49.50	,	31.60	        ,'Faworki luksusowe'	,	8.80	,	1.20	,	16	),
(	794	, current_timestamp, current_timestamp,0,	476.00	,	37.60	,	30.20	        ,'Groszek ptysiowy'	,	14.90	,	1.20	,	16	),
(	795	, current_timestamp, current_timestamp,0,	10.00	,	2.60	,	0.00	        ,'Guma do życia'	,	0.00	,	NULL	,	16	),
(	796	, current_timestamp, current_timestamp,0,	437.00	,	76.80	,	11.00	        ,'Herbatniki'	,	8.20	,	1.30	,	16	),
(	797	, current_timestamp, current_timestamp,0,	440.00	,	67.10	,	17.20	        ,'Herbatniki „Corso”'	,	5.00	,	1.30	,	16	),
(	798	, current_timestamp, current_timestamp,0,	474.00	,	62.90	,	22.30	        ,'Herbatniki kakaowe'	,	6.90	,	1.60	,	16	),
(	799	, current_timestamp, current_timestamp,0,	473.00	,	59.80	,	25.20	        ,'Herbatniki kokosowe'	,	6.40	,	4.50	,	16	),
(	800	, current_timestamp, current_timestamp,0,	503.00	,	55.70	,	28.60	        ,'Herbatniki sezamowe'	,	8.10	,	2.20	,	16	),
(	801	, current_timestamp, current_timestamp,0,	489.00	,	63.10	,	24.00	        ,'Herbatniki w czekoladzie'	,	6.30	,	1.20	,	16	),
(	802	, current_timestamp, current_timestamp,0,	492.00	,	64.70	,	23.70	        ,'Herbatniki w czekoladzie z orzechami'	,	6.00	,	1.20	,	16	),
(	803	, current_timestamp, current_timestamp,0,	460.00	,	70.70	,	17.20	        ,'Herbatniki z cukrem'	,	6.70	,	1.60	,	16	),
(	804	, current_timestamp, current_timestamp,0,	493.00	,	61.20	,	25.50	        ,'Herbatniki z czekoladą'	,	5.90	,	1.20	,	16	),
(	805	, current_timestamp, current_timestamp,0,	497.00	,	57.30	,	27.90	        ,'Herbatniki z nadzieniem czekoladowym'	,	5.50	,	1.30	,	16	),
(	806	, current_timestamp, current_timestamp,0,	390.00	,	58.60	,	16.10	        ,'Herbatniki z nadzieniem owocowym'	,	3.80	,	1.50	,	16	),
(	807	, current_timestamp, current_timestamp,0,	421.00	,	76.10	,	10.70	        ,'Irysy, krówki'	,	4.30	,	0.00	,	16	),
(	808	, current_timestamp, current_timestamp,0,	318.00	,	56.80	,	9.30	        ,'Jabłecznik ze świeżych jabłek'	,	3.40	,	2.20	,	16	),
(	809	, current_timestamp, current_timestamp,0,	397.00	,	46.10	,	22.70	        ,'Jabłka w cieście francuskim'	,	4.40	,	2.20	,	16	),
(	810	, current_timestamp, current_timestamp,0,	316.00	,	61.00	,	5.20	        ,'Jagodzianki'	,	7.40	,	2.00	,	16	),
(	811	, current_timestamp, current_timestamp,0,	448.00	,	50.60	,	21.70	        ,'Kakao 16%, proszek'	,	18.20	,	5.70	,	16	),
(	812	, current_timestamp, current_timestamp,0,	404.00	,	89.80	,	3.10	        ,'Kakao rozpuszczalne'	,	3.80	,	1.00	,	16	),
(	813	, current_timestamp, current_timestamp,0,	378.00	,	92.00	,	0.50	        ,'Karmelki nadziewane'	,	0.30	,	0.30	,	16	),
(	814	, current_timestamp, current_timestamp,0,	399.00	,	98.20	,	0.00	        ,'Karmelki twarde'	,	0.00	,	0.00	,	16	),
(	815	, current_timestamp, current_timestamp,0,	385.00	,	53.70	,	17.50	        ,'Keks bakaliowy'	,	6.50	,	3.60	,	16	),
(	816	, current_timestamp, current_timestamp,0,	332.00	,	83.00	,	NULL	        ,'Kisiel owocowy, w proszku'	,	NULL	,	NULL	,	16	),
(	817	, current_timestamp, current_timestamp,0,	456.00	,	73.00	,	16.50	        ,'Krem czekoladowy, w proszku'	,	4.00	,	NULL	,	16	),
(	818	, current_timestamp, current_timestamp,0,	322.00	,	80.00	,	NULL	        ,'Krem owocowy, w proszku'	,	0.50	,	NULL	,	16	),
(	819	, current_timestamp, current_timestamp,0,	401.00	,	69.50	,	13.00	        ,'Krem waniliowy, w proszku'	,	1.50	,	NULL	,	16	),
(	820	, current_timestamp, current_timestamp,0,	127.00	,	20.00	,	3.00	        ,'Lody mleczne'	,	5.00	,	NULL	,	16	),
(	821	, current_timestamp, current_timestamp,0,	115.00	,	19.00	,	3.00	        ,'Lody mleczno-owocowe'	,	3.00	,	NULL	,	16	),
(	822	, current_timestamp, current_timestamp,0,	80.00	,	20.00	,	NULL	        ,'Lody owocowe'	,	NULL	,	NULL	,	16	),
(	823	, current_timestamp, current_timestamp,0,	220.00	,	15.00	,	17.00	        ,'Lody śmietankowe'	,	2.00	,	NULL	,	16	),
(	824	, current_timestamp, current_timestamp,0,	493.00	,	59.00	,	25.00	        ,'Marcepan'	,	8.00	,	1.00	,	16	),
(	825	, current_timestamp, current_timestamp,0,	483.00	,	64.30	,	23.00	        ,'Markizy'	,	5.60	,	1.20	,	16	),
(	826	, current_timestamp, current_timestamp,0,	270.00	,	64.50	,	0.00	        ,'Melasa'	,	2.90	,	6.00	,	16	),
(	827	, current_timestamp, current_timestamp,0,	324.00	,	79.50	,	0.00	        ,'Miód pszczeli'	,	0.30	,	0.00	,	16	),
(	828	, current_timestamp, current_timestamp,0,	336.00	,	82.50	,	0.00	        ,'Miód sztuczny'	,	0.10	,	0.00	,	16	),
(	829	, current_timestamp, current_timestamp,0,	500.00	,	66.00	,	24.00	        ,'Nugat'	,	5.00	,	NULL	,	16	),
(	830	, current_timestamp, current_timestamp,0,	528.00	,	58.40	,	31.00	        ,'Pasta orzechowa do chleba'	,	4.00	,	NULL	,	16	),
(	831	, current_timestamp, current_timestamp,0,	414.00	,	62.10	,	15.50	        ,'Pączki tradycyjne'	,	7.60	,	1.50	,	16	),
(	832	, current_timestamp, current_timestamp,0,	410.00	,	73.00	,	9.90	        ,'Pieczywo półfrancuskie, z dżemem'	,	8.30	,	2.00	,	16	),
(	833	, current_timestamp, current_timestamp,0,	396.00	,	66.60	,	10.00	        ,'Pieczywo półfrancuskie, z serem'	,	10.70	,	1.70	,	16	),
(	834	, current_timestamp, current_timestamp,0,	373.00	,	60.90	,	12.40	        ,'Piernik z bakaliami'	,	6.60	,	2.70	,	16	),
(	835	, current_timestamp, current_timestamp,0,	368.00	,	66.30	,	9.70	        ,'Pierniki alpejskie'	,	4.00	,	0.90	,	16	),
(	836	, current_timestamp, current_timestamp,0,	338.00	,	77.30	,	1.60	        ,'Pierniki beskidzkie'	,	3.50	,	1.00	,	16	),
(	837	, current_timestamp, current_timestamp,0,	375.00	,	56.70	,	13.60	        ,'Placek z kruszonką'	,	7.50	,	1.40	,	16	),
(	838	, current_timestamp, current_timestamp,0,	346.00	,	25.70	,	24.90	        ,'Ptysie z bitą śmietaną'	,	5.50	,	0.30	,	16	),
(	839	, current_timestamp, current_timestamp,0,	331.00	,	59.40	,	7.20	        ,'Rogale kruche'	,	8.20	,	1.80	,	16	),
(	840	, current_timestamp, current_timestamp,0,	392.00	,	38.60	,	25.10	        ,'Rożki z ciasta francuskiego z jabłkami'	,	5.00	,	1.70	,	16	),
(	841	, current_timestamp, current_timestamp,0,	363.00	,	36.80	,	18.30	        ,'Sernik bez ciasta'	,	13.50	,	0.70	,	16	),
(	842	, current_timestamp, current_timestamp,0,	329.00	,	38.20	,	13.40	        ,'Sernik krakowski'	,	14.00	,	0.50	,	16	),
(	843	, current_timestamp, current_timestamp,0,	340.00	,	32.10	,	18.10	        ,'Sernik wiedeński z polewą kakaową'	,	12.60	,	0.50	,	16	),
(	844	, current_timestamp, current_timestamp,0,	444.00	,	49.00	,	23.40	        ,'Sernik z makiem'	,	12.50	,	3.10	,	16	),
(	845	, current_timestamp, current_timestamp,0,	402.00	,	34.70	,	26.40	        ,'Sezamki'	,	10.20	,	3.50	,	16	),
(	846	, current_timestamp, current_timestamp,0,	376.00	,	29.40	,	26.10	        ,'Sezamki z orzechami'	,	9.60	,	3.30	,	16	),
(	847	, current_timestamp, current_timestamp,0,	361.00	,	51.20	,	15.50	        ,'Strucla z makiem'	,	8.30	,	4.40	,	16	),
(	848	, current_timestamp, current_timestamp,0,	318.00	,	49.00	,	11.10	        ,'Torcik „Wuzetka”'	,	5.80	,	0.80	,	16	),
(	849	, current_timestamp, current_timestamp,0,	309.00	,	49.00	,	10.70	        ,'Tort ananasowy'	,	4.40	,	0.60	,	16	),
(	850	, current_timestamp, current_timestamp,0,	519.00	,	60.70	,	27.50	        ,'Wafle nadziewane'	,	8.30	,	1.20	,	16	),
(	851	, current_timestamp, current_timestamp,0,	553.00	,	55.60	,	33.90	        ,'Wafle w czekoladzie'	,	7.40	,	0.70	,	16	),
(	852	, current_timestamp, current_timestamp,0,	306.00	,	72.30	,	0.00	        ,'Żelki'	,	3.00	,	0.00	,	16	),
(	853	, current_timestamp, current_timestamp,0,	92.00	,	14.50	,	2.00	        ,'Drożdże piekarskie, prasowane'	,	11.30	,	7.40	,	17	),
(	854	, current_timestamp, current_timestamp,0,	714.00	,	2.60	,	79.00	        ,'Majonez domowy z olejem rzepakowym'	,	1.30	,	0.10	,	17	),
(	855	, current_timestamp, current_timestamp,0,	714.00	,	2.60	,	79.00	        ,'Majonez domowy z olejem słonecznikowym'	,	1.30	,	0.10	,	17	),
(	856	, current_timestamp, current_timestamp,0,	162.00	,	22.00	,	6.40	        ,'Musztarda'	,	5.70	,	1.70	,	17	),
(	857	, current_timestamp, current_timestamp,0,	343.00	,	0.00	,	0.10	        ,'Żelatyna'	,	84.20	,	0.00	,	17	),
(	858	, current_timestamp, current_timestamp,0,	128.00	,	5.5	    ,	10.0  	        ,'Pilos jogurt grecki'	,	4.0	,	0.00	,	2	),
(	859	, current_timestamp, current_timestamp,0,	80.00	,	2.3	    ,	3.0  	        ,'Pilos serek wiejski'	,	11.0	,	0.00	,	2	),
(	860	, current_timestamp, current_timestamp,0,	6.00	,	0.3	    ,	0.5  	        ,'Bulion z kostki'	,	0.1	,	0.00	, 17	),
(	861	, current_timestamp, current_timestamp,0,	70.00	,	8.3	    ,	3.4  	        ,'Ryneczek Lidla - codzienna'	,	0.8	,	1.6	, 13	),
(	862	, current_timestamp, current_timestamp,0,	88.00	,	14.0	    ,	2.5  	        ,'Ryneczek Lidla - buraczki'	,	1.2	,	0.00	, 13	),
(	863	, current_timestamp, current_timestamp,0,	53.00	,	2.2	    ,	6.0  	        ,'Ryneczek Lidla - colesław'	,	1.6	,	0.00	, 13	),
(	864	, current_timestamp, current_timestamp,0,	65.00	,	8.7	    ,	2.5  	        ,'Ryneczek Lidla - rodzinna'	,	0.8	,	0.00	, 13	),
(	865	, current_timestamp, current_timestamp,0,	82.00	,	10.5	    ,	3.2  	        ,'Ryneczek Lidla - wiosenna'	,	1.5	,	0.00	, 13	),
(	866	, current_timestamp, current_timestamp,0,	233.00	,	21.0	    ,	4.0  	        ,'Serek puszysty almette'	,	7.0	,	0.00	,	2	),
(	867	, current_timestamp, current_timestamp,0,	55.0	,	4.0		,		3.0			,'Warzywa na patelnie chińskie'	,	2.0	,	0.0	,	13	),
(	868	, current_timestamp, current_timestamp,0,	111	,	12.6		,		1.0			,'Fasola w zalewie'	,	8.4	,	0.0	,	13	),
(	869	, current_timestamp, current_timestamp,0,	30.0	,	5.0		,		0.0			,'Passata pomidorowa'	,	2.0	,	0.0	,	13	),
(	870	, current_timestamp, current_timestamp,0,	228.0	,	1.0		,		25.0			,'Mięso mielone wołowe'	,	15.0	,	0.0	,	3	);
