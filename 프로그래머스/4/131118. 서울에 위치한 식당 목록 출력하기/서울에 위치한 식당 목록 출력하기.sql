# -- 코드를 입력하세요
# SELECT A.REST_ID, A.REST_NAME, A.FOOD_TYPE, A.FAVORITES, A.ADDRESS, ROUND(AVG(B.REVIEW_SCORE), 2) as SCORE
# from REST_INFO A, REST_REVIEW B
# where A.REST_ID = B.REST_ID and left(A.ADDRESS, 2) = "서울"
# order by ROUND(AVG(B.REVIEW_SCORE), 2) Desc, A.FAVORITES Desc



SELECT A.REST_ID, B.REST_NAME, B.FOOD_TYPE, B.FAVORITES, B.ADDRESS, ROUND(AVG(A.REVIEW_SCORE),2) AS SCORE
FROM REST_REVIEW A
JOIN REST_INFO B ON A.REST_ID = B.REST_ID
GROUP BY A.REST_ID
HAVING B.ADDRESS LIKE '서울%'
ORDER BY SCORE DESC, B.FAVORITES DESC;