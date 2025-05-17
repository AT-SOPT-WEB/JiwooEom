import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router'; 
import axios from 'axios';

const PokemonDetail = () => {
    const { name } = useParams();
    const [pokemonType, setPokemonType] = useState([]);
    const [pokemonPic, setPokemonPic] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${name}`
                );
                setPokemonType(res.data.types);
                setPokemonPic(res.data.sprites.front_default);
            } catch (error) {
                console.error('포켓몬 정보를 불러오는 데 실패했습니다.', error);
            }
        };

        fetchData();
    }, [name]);

    const nameToUpperCase = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <div style={{ padding: '2rem' }}>
            <Link to="/" style={{ textDecoration: "none", color: "blue" }}>← 목록으로</Link>
            <h1>{nameToUpperCase}</h1>
            <p>
                Type: {pokemonType.map((r) => r.type.name).join(', ')}
            </p>
            <img src={pokemonPic} width='250'/>
        </div>
    );
};

export default PokemonDetail;
