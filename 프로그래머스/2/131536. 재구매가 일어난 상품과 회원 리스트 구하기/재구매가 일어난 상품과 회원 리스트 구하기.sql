-- 코드를 입력하세요
SELECT USER_ID, PRODUCT_ID
from ONLINE_SALE
group by user_id, product_id
having count(product_id) >= 2
order by USER_ID , PRODUCT_ID desc