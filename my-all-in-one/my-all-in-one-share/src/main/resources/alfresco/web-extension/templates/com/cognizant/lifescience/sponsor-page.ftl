  
<#include "/org/alfresco/include/alfresco-template.ftl" />
<@templateHeader></@>
<@templateBody>
<@markup id="alf-hd">
   <div id="alf-hd">
      <@region scope="global" id="share-header" chromeless="true"/>
   </div>
   </@>
 <@markup id="bd">
    <div id="bd">
        <@region id="body" scope="page" />
    </div>
   </@>
<@markup id="bd">
    <div id="bd">
        <@region id="dashlet" scope="page" />
    </div>
   </@>
<@markup id="bd">
    <div id="bd">
        <@region id="create-user" scope="page" />
    </div>
   </@>

</@>
<@templateFooter>
   <@markup id="alf-ft">
   <div id="alf-ft">
      <@region id="footer" scope="global" />
   </div>
   </@>
</@>