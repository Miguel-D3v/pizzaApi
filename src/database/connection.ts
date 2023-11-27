import postgres from 'https://deno.land/x/postgresjs/mod.js'
import {PGDATABASE , PGHOST , PGPASSWORD , PGPORT , PGURL , PGUSER } from './config.env.ts';

 const sql = postgres(PGURL, {
    host                 : PGHOST,       
    port                 : PGPORT,         
    database             : PGDATABASE,        
    username             : PGUSER,            
    password             : PGPASSWORD,         
  
  })
  
  export default sql ;