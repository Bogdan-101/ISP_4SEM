import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Anon from '../../../assets/anon.jpg';
import Logo from '../../../assets/Logo.png';
import './MainPage.css';
import { useFetch } from '../../../helpers/useFetch';

export const MainPage = () => {
    const [methods, res, loading, isError] = useFetch();

    useEffect(() => {
        methods.get('/api/board/');
    }, [])

    return (
        <>
            <header className='welcome'>
                <div className='welcome__img'>
                    <img src={Logo} alt='logo of dvach' />
                </div>
                <span className='welcome__friend'>Добро пожаловать. Снова.</span>
            </header>
            <div className='content'>
                <article className='greeting content__block'>
                    Два.ч - это система форумов, где можно общаться быстро и свободно, где любая точка зрения имеет право на жизнь. Здесь нет регистрации и подписываться не нужно, хотя это не избавляет вас от необходимости соблюдать правила. Все форумы (кроме
                    <Link to={{ pathname: `/board/b`, fromDashboard: false }}> B</Link>
                    реда), а их список находится снизу, имеют собственную чётко ограниченную тематику. Словом, всё, что не запрещено правилами отдельно взятого форума и относится к его тематике, на этом форуме разрешено.
                </article>
                <article className='content__block'>
                    <img src={Anon} alt='anon' className='content__anon' />
                </article>
                <article className='content__block content__threads'>
                    {loading && loading} asd
                    {res ? res.map((elem) =>
                        <div className='thread'>
                            <Link to={{ pathname: `/board/${elem.id}`, fromDashboard: false }} key={elem.id} className='thread__link'>{elem.name}</Link>
                        </div>
                    ) : <h3>Loading...</h3>}
                </article>
            </div>
        </>
    )
}
