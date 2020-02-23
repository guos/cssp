package com.mtl.cssp.cssp.web.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mtl.cssp.cssp.common.Constants;
import com.mtl.cssp.cssp.pojo.CItem;

@RestController
@RequestMapping("ui")
public class SpaceController {

	
	@GetMapping("space")
	public List<CItem>getAllSpace(){
		List<CItem>cItems=new ArrayList<>() ;
		CItem space1=new CItem();
		space1.setId("100001");
		space1.setTitle("MTL");	
		space1.setType(Constants.SPACE);
		//-------children
		List<CItem>spacechildren=new ArrayList<>();
		CItem page1=new CItem();
		page1.setId("page1");
		page1.setTitle("page 1 's title");
		page1.setType(Constants.PAGE);
		List<CItem>contentList=new ArrayList<>();
		
		CItem content1=new CItem();
		content1.setId("c1");
		content1.setTitle("this is the content 1 under page 1");
		contentList.add(content1);
		CItem content2=new CItem();
		content2.setId("c2");
		content2.setTitle("this is the content 2 under page 1");
		contentList.add(content2);
		CItem content3=new CItem();
		content3.setId("c3");
		content3.setTitle("this is the content 3 under page 1");
		contentList.add(content3);
		//--add the page 
		page1.setChildren(contentList);
		spacechildren.add(page1);
		//--------------------------------follow is page 2
		CItem page2=new CItem();
		page2.setId("page2");
		page2.setTitle("page 2 's title");
		page2.setType(Constants.PAGE);
		spacechildren.add(page2);		
		space1.setChildren(spacechildren);
		cItems.add(space1);
		
		//--------------------------------follow is another space
		CItem space2=new CItem();
		space2.setId("200001");
		space2.setTitle("MTC");	
		space2.setType(Constants.SPACE);
		//-------children
		List<CItem>children2=new ArrayList<>();
		CItem page21=new CItem();
		page21.setId("page21");
		page21.setTitle("this is the page 21 's title");
		children2.add(page21);
		
		CItem page22=new CItem();
		page22.setId("page22");
		page22.setTitle("this is the page 22 's title");
		children2.add(page22);		
		space2.setChildren(children2);
		cItems.add(space2);
		
		return cItems;
	}
	
	
	@GetMapping("space/{id}")
	public List<CItem>getOneSpace(String id){
		return null;
	}
	
	
	@GetMapping("page/{id}")
	public CItem getOnePage(@PathVariable String id){
		CItem item=new CItem();
		item.setId(id);
		item.setType(Constants.PAGE);
		item.setTitle("this is the test page"+ id);
		return item;
	}
}
