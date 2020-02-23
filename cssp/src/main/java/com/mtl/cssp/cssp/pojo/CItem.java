package com.mtl.cssp.cssp.pojo;

import java.util.ArrayList;
import java.util.List;

/**
 * 
 * @author shunxuguo
 *
 */
public class CItem {
	String id;
	String title;
	String type;
	boolean changed;
	List<CItem> children=new ArrayList<>();

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public boolean isChanged() {
		return changed;
	}

	public void setChanged(boolean changed) {
		this.changed = changed;
	}

	public List<CItem> getChildren() {
		return children;
	}

	public void setChildren(List<CItem> children) {
		this.children = children;
	}

}
