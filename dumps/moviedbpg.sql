--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2022-02-18 15:53:05

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 214 (class 1259 OID 16482)
-- Name: addresses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.addresses (
    address_id integer NOT NULL,
    country character varying NOT NULL,
    area character varying NOT NULL,
    city character varying NOT NULL,
    street character varying NOT NULL,
    number integer NOT NULL,
    contact_id integer NOT NULL
);


ALTER TABLE public.addresses OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16481)
-- Name: addresses_address_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.addresses ALTER COLUMN address_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.addresses_address_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 212 (class 1259 OID 16474)
-- Name: contacts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contacts (
    contact_id integer NOT NULL,
    name character varying,
    birthdate date,
    gender character varying,
    email character varying NOT NULL,
    userid integer NOT NULL
);


ALTER TABLE public.contacts OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16547)
-- Name: contacts_contact_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.contacts ALTER COLUMN contact_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.contacts_contact_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 216 (class 1259 OID 16545)
-- Name: movie_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.movie_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.movie_sequence OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16450)
-- Name: movies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movies (
    title character varying,
    added_date date,
    movie_id integer NOT NULL,
    movie_ref character varying
);


ALTER TABLE public.movies OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16546)
-- Name: movies_movie_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.movies ALTER COLUMN movie_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.movies_movie_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 209 (class 1259 OID 16438)
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    userid integer NOT NULL,
    role character varying NOT NULL,
    role_id integer NOT NULL,
    uid_fk bigint
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16579)
-- Name: roles_role_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.roles ALTER COLUMN role_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.roles_role_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 211 (class 1259 OID 16457)
-- Name: seenmovies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.seenmovies (
    userid integer NOT NULL,
    seen_date timestamp without time zone NOT NULL,
    movie_ref character varying NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.seenmovies OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16580)
-- Name: seenmovies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.seenmovies ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.seenmovies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 215 (class 1259 OID 16503)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    userid integer NOT NULL,
    password character varying(255),
    username character varying(255) NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16578)
-- Name: users_userid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN userid ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_userid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3372 (class 0 OID 16482)
-- Dependencies: 214
-- Data for Name: addresses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.addresses (address_id, country, area, city, street, number, contact_id) FROM stdin;
6	Morocco	Oriental	Berkane	Wifak Street	15	57
8	Morocco	Ouerzazat	Khenifa	Hay Najah	90	59
\.


--
-- TOC entry 3370 (class 0 OID 16474)
-- Dependencies: 212
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contacts (contact_id, name, birthdate, gender, email, userid) FROM stdin;
57	Hafid Elbekkaoui	1990-01-13	male	hafeed@gmail.com	65
59	John Dist	2022-02-17	male	johndist91@gmail.com	72
\.


--
-- TOC entry 3368 (class 0 OID 16450)
-- Dependencies: 210
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movies (title, added_date, movie_id, movie_ref) FROM stdin;
Spider-Man No Way Home	2022-02-16	26	620c3ee48904a9803dff328a
Vikings - Final Season	2022-02-16	27	620c3f8b8904a9803dff328e
Game of Thrones - Final Season	2022-02-16	28	620c40452f6976e1cc1e35f0
ANNE+	2022-02-16	29	620c41131bde5e547678db15
Eiffel	2022-02-16	30	620c42ce1bde5e547678db1c
Red Notice	2022-02-16	31	620c43411bde5e547678db24
The Unforgivable	2022-02-16	32	620c439b1bde5e547678db2d
Reminiscence	2022-02-16	33	620c44941bde5e547678db37
Roman J. Israel, Esq.	2022-02-16	34	620c45111bde5e547678db42
The Mist	2022-02-16	35	620c45fa1bde5e547678db4e
F9	2022-02-16	36	620c46cf1bde5e547678db5b
Greyhound	2022-02-16	37	620c474b1bde5e547678db69
\.


--
-- TOC entry 3367 (class 0 OID 16438)
-- Dependencies: 209
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (userid, role, role_id, uid_fk) FROM stdin;
65	USER	28	\N
72	USER	30	\N
\.


--
-- TOC entry 3369 (class 0 OID 16457)
-- Dependencies: 211
-- Data for Name: seenmovies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.seenmovies (userid, seen_date, movie_ref, id) FROM stdin;
65	2022-02-16 02:30:43.067	620c40452f6976e1cc1e35f0	9
65	2022-02-16 15:15:56.301	620c3ee48904a9803dff328a	10
65	2022-02-16 15:16:11.531	620c3ee48904a9803dff328a	11
65	2022-02-16 15:16:25.142	620c40452f6976e1cc1e35f0	12
65	2022-02-16 15:16:28.583	620c41131bde5e547678db15	13
65	2022-02-16 15:16:31.676	620c42ce1bde5e547678db1c	14
65	2022-02-16 15:16:34.761	620c42ce1bde5e547678db1c	15
65	2022-02-16 15:16:37.913	620c42ce1bde5e547678db1c	16
65	2022-02-16 15:16:44.857	620c42ce1bde5e547678db1c	17
65	2022-02-16 16:10:54.111	620c44941bde5e547678db37	18
72	2022-02-17 00:32:46.851	620c3f8b8904a9803dff328e	19
65	2022-02-17 02:08:16.803	620c45fa1bde5e547678db4e	20
65	2022-02-17 02:08:22.577	620c43411bde5e547678db24	21
65	2022-02-17 02:08:27.889	620c45111bde5e547678db42	22
65	2022-02-17 02:43:15.236	620c3ee48904a9803dff328a	23
65	2022-02-17 02:47:21.114	620c3ee48904a9803dff328a	24
65	2022-02-17 02:47:23.578	620c43411bde5e547678db24	25
65	2022-02-17 02:47:27.314	620c3f8b8904a9803dff328e	26
65	2022-02-17 02:47:30.819	620c45111bde5e547678db42	27
65	2022-02-17 17:54:57.758	620c46cf1bde5e547678db5b	28
65	2022-02-17 18:24:36.803	620c45fa1bde5e547678db4e	29
65	2022-02-17 18:28:00.339	620c474b1bde5e547678db69	30
65	2022-02-17 18:37:51.257	620c474b1bde5e547678db69	31
65	2022-02-17 18:46:25.752	620c43411bde5e547678db24	32
65	2022-02-17 18:48:56.451	620c3f8b8904a9803dff328e	33
\.


--
-- TOC entry 3373 (class 0 OID 16503)
-- Dependencies: 215
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (userid, password, username) FROM stdin;
65	$2a$10$MO.OgOnmou0jfzAbsPZaWu0vU8z7t8D47up6dAL6V4l5f3BDZ6PJm	hafeed06
72	$2a$10$..61gTVMf4Q8j8XO8OmR2evNwUBZSURNZlKD4GimpQiONn9m0cr2y	john
\.


--
-- TOC entry 3385 (class 0 OID 0)
-- Dependencies: 213
-- Name: addresses_address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.addresses_address_id_seq', 8, true);


--
-- TOC entry 3386 (class 0 OID 0)
-- Dependencies: 218
-- Name: contacts_contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contacts_contact_id_seq', 59, true);


--
-- TOC entry 3387 (class 0 OID 0)
-- Dependencies: 216
-- Name: movie_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movie_sequence', 12, true);


--
-- TOC entry 3388 (class 0 OID 0)
-- Dependencies: 217
-- Name: movies_movie_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movies_movie_id_seq', 37, true);


--
-- TOC entry 3389 (class 0 OID 0)
-- Dependencies: 220
-- Name: roles_role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_role_id_seq', 30, true);


--
-- TOC entry 3390 (class 0 OID 0)
-- Dependencies: 221
-- Name: seenmovies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seenmovies_id_seq', 33, true);


--
-- TOC entry 3391 (class 0 OID 0)
-- Dependencies: 219
-- Name: users_userid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_userid_seq', 72, true);


--
-- TOC entry 3213 (class 2606 OID 16761)
-- Name: addresses address_contact_id_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT address_contact_id_unique UNIQUE (contact_id);


--
-- TOC entry 3215 (class 2606 OID 16488)
-- Name: addresses addresses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_pkey PRIMARY KEY (address_id);


--
-- TOC entry 3204 (class 2606 OID 16763)
-- Name: contacts contact_email_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contact_email_unique UNIQUE (email);


--
-- TOC entry 3206 (class 2606 OID 16765)
-- Name: contacts contact_userid_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contact_userid_unique UNIQUE (userid);


--
-- TOC entry 3209 (class 2606 OID 16478)
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (contact_id);


--
-- TOC entry 3197 (class 2606 OID 16513)
-- Name: movies movie_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movie_pkey PRIMARY KEY (movie_id);


--
-- TOC entry 3191 (class 2606 OID 16537)
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (role_id);


--
-- TOC entry 3193 (class 2606 OID 16767)
-- Name: roles roles_user_id_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_user_id_unique UNIQUE (userid);


--
-- TOC entry 3202 (class 2606 OID 16541)
-- Name: seenmovies seenmovies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seenmovies
    ADD CONSTRAINT seenmovies_pkey PRIMARY KEY (id);


--
-- TOC entry 3199 (class 2606 OID 16528)
-- Name: movies unique_movie_ref; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT unique_movie_ref UNIQUE (movie_ref);


--
-- TOC entry 3195 (class 2606 OID 16539)
-- Name: roles unique_userid; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT unique_userid UNIQUE (userid);


--
-- TOC entry 3217 (class 2606 OID 16630)
-- Name: users unique_username; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT unique_username UNIQUE (username);


--
-- TOC entry 3219 (class 2606 OID 16769)
-- Name: users user_username_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_username_unique UNIQUE (username);


--
-- TOC entry 3221 (class 2606 OID 16583)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (userid);


--
-- TOC entry 3207 (class 1259 OID 16520)
-- Name: contacts_email_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX contacts_email_uindex ON public.contacts USING btree (email);


--
-- TOC entry 3210 (class 1259 OID 16605)
-- Name: fki_fk_contact_id_contacts; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_fk_contact_id_contacts ON public.contacts USING btree (contact_id);


--
-- TOC entry 3200 (class 1259 OID 16526)
-- Name: fki_fk_userid_users; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_fk_userid_users ON public.seenmovies USING btree (userid);


--
-- TOC entry 3211 (class 1259 OID 16611)
-- Name: fki_k; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_k ON public.contacts USING btree (userid);


--
-- TOC entry 3223 (class 2606 OID 16770)
-- Name: roles fk9gy1w5ujm4erh7epy59qti61o; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT fk9gy1w5ujm4erh7epy59qti61o FOREIGN KEY (uid_fk) REFERENCES public.users(userid);


--
-- TOC entry 3227 (class 2606 OID 16617)
-- Name: addresses fk_contact_id_contacts; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT fk_contact_id_contacts FOREIGN KEY (contact_id) REFERENCES public.contacts(contact_id);


--
-- TOC entry 3224 (class 2606 OID 16529)
-- Name: seenmovies fk_movie_ref_movies; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seenmovies
    ADD CONSTRAINT fk_movie_ref_movies FOREIGN KEY (movie_ref) REFERENCES public.movies(movie_ref) NOT VALID;


--
-- TOC entry 3225 (class 2606 OID 16584)
-- Name: seenmovies fk_userid_users; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seenmovies
    ADD CONSTRAINT fk_userid_users FOREIGN KEY (userid) REFERENCES public.users(userid) NOT VALID;


--
-- TOC entry 3226 (class 2606 OID 16631)
-- Name: contacts fk_userid_users; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT fk_userid_users FOREIGN KEY (userid) REFERENCES public.users(userid) NOT VALID;


--
-- TOC entry 3222 (class 2606 OID 16641)
-- Name: roles fk_userid_users; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT fk_userid_users FOREIGN KEY (userid) REFERENCES public.users(userid);


-- Completed on 2022-02-18 15:53:06

--
-- PostgreSQL database dump complete
--

