-- https://programmers.co.kr/learn/courses/30/lessons/59408
SELECT count(DISTINCT NAME) as 'count'
    FROM ANIMAL_INS
    WHERE NAME IS NOT NULL