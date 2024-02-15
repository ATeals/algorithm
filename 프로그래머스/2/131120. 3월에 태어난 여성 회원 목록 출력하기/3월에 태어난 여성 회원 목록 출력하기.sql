-- 코드를 입력하세요
SELECT  MEMBER_ID, MEMBER_NAME, GENDER, DATE_FORMAT(DATE_OF_BIRTH, '%Y-%m-%d') AS DATE_OF_BIRTH
from member_profile
where MONTH(DATE_OF_BIRTH) = 3 and GENDER = "W" AND TLNO is not null
order by MEMBER_ID