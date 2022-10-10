# SQL 쿼리문

## 테이블 목록 조회(mysql, mariadb)

```sql
SELECT * FROM Information_schema.tables
WHERE TABLE_SCHEMA = 'ProteenDatabase';
```

## 테이블 삭제

```sql
drop table (테이블 이름);
```

## 테이블 내부 컬럼 데이터 조회

```sql
select * from (테이블 이름);
```
